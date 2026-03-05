import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { name, email, paypalEmail, platform, platformHandle, commissionType } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Generate unique code from name
    const baseCode = name
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 12);

    // Check if code exists, append number if needed
    let code = baseCode;
    let attempt = 0;
    while (true) {
      const { data: existing } = await supabaseAdmin
        .from("affiliates")
        .select("code")
        .eq("code", code)
        .single();

      if (!existing) break;
      attempt++;
      code = `${baseCode}${attempt}`;
    }

    // Check if email already registered
    const { data: existingEmail } = await supabaseAdmin
      .from("affiliates")
      .select("code")
      .eq("email", email)
      .single();

    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already registered", code: existingEmail.code },
        { status: 409 }
      );
    }

    const commType = commissionType === "recurring" ? "recurring" : "bounty";
    const commAmount = commType === "bounty" ? 15.00 : 25.00; // default bounty $15, or 25% recurring

    const { data, error } = await supabaseAdmin.from("affiliates").insert({
      code,
      name,
      email,
      paypal_email: paypalEmail || email,
      platform: platform || "other",
      platform_handle: platformHandle || "",
      commission_type: commType,
      commission_amount: commAmount,
    }).select().single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      code: data.code,
      dashboardUrl: `https://citationcore.com/affiliate/${data.code}`
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
