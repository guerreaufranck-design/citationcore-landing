import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await params;
    const upperCode = code.toUpperCase();

    // Get affiliate info
    const { data: affiliate } = await supabaseAdmin
      .from("affiliates")
      .select("*")
      .eq("code", upperCode)
      .single();

    if (!affiliate) {
      return NextResponse.json({ error: "Affiliate not found" }, { status: 404 });
    }

    // Get total clicks
    const { count: totalClicks } = await supabaseAdmin
      .from("affiliate_clicks")
      .select("*", { count: "exact", head: true })
      .eq("affiliate_code", upperCode);

    // Get clicks last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const { count: recentClicks } = await supabaseAdmin
      .from("affiliate_clicks")
      .select("*", { count: "exact", head: true })
      .eq("affiliate_code", upperCode)
      .gte("created_at", thirtyDaysAgo.toISOString());

    // Get referrals
    const { data: referrals } = await supabaseAdmin
      .from("affiliate_referrals")
      .select("*")
      .eq("affiliate_code", upperCode)
      .order("created_at", { ascending: false });

    const allReferrals = referrals || [];
    const totalInstalls = allReferrals.length;
    const paidInstalls = allReferrals.filter((r) => r.status === "paid").length;
    const churnedInstalls = allReferrals.filter((r) => r.status === "churned").length;

    // Calculate earnings
    const totalEarned = allReferrals
      .filter((r) => r.bounty_paid)
      .reduce((sum, r) => sum + (r.bounty_amount || 0), 0);

    const pendingEarnings = allReferrals
      .filter((r) => r.status === "paid" && !r.bounty_paid)
      .reduce((sum, r) => sum + (r.bounty_amount || 0), 0);

    // Get payouts
    const { data: payouts } = await supabaseAdmin
      .from("affiliate_payouts")
      .select("*")
      .eq("affiliate_code", upperCode)
      .order("created_at", { ascending: false })
      .limit(10);

    return NextResponse.json({
      affiliate: {
        name: affiliate.name,
        code: affiliate.code,
        commission_amount: affiliate.commission_amount,
        created_at: affiliate.created_at,
      },
      stats: {
        totalClicks: totalClicks || 0,
        recentClicks: recentClicks || 0,
        totalInstalls,
        paidInstalls,
        churnedInstalls,
        totalEarned,
        pendingEarnings,
        conversionRate: totalClicks ? ((totalInstalls / totalClicks) * 100).toFixed(1) : "0",
      },
      referrals: allReferrals.map((r) => ({
        shop: r.shop_domain,
        status: r.status,
        plan: r.plan,
        bounty: r.bounty_amount,
        paid: r.bounty_paid,
        date: r.installed_at,
      })),
      payouts: payouts || [],
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
