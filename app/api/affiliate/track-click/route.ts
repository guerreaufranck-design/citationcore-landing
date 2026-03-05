import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { code, referrer, landingPage } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    // Verify affiliate exists
    const { data: affiliate } = await supabaseAdmin
      .from("affiliates")
      .select("code")
      .eq("code", code.toUpperCase())
      .eq("status", "active")
      .single();

    if (!affiliate) {
      return NextResponse.json({ error: "Invalid affiliate" }, { status: 404 });
    }

    // Hash IP for privacy
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const ipHash = crypto.createHash("sha256").update(ip).digest("hex").slice(0, 16);

    // Record click
    await supabaseAdmin.from("affiliate_clicks").insert({
      affiliate_code: code.toUpperCase(),
      ip_hash: ipHash,
      user_agent: req.headers.get("user-agent") || "",
      referrer: referrer || "",
      landing_page: landingPage || "/",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
