"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RefTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (!ref) return;

    // Store ref in cookie (30 days)
    const expires = new Date();
    expires.setDate(expires.getDate() + 30);
    document.cookie = `cc_ref=${ref.toUpperCase()};expires=${expires.toUTCString()};path=/;SameSite=Lax`;

    // Also store in localStorage as backup
    localStorage.setItem("cc_ref", ref.toUpperCase());

    // Track the click
    fetch("/api/affiliate/track-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: ref.toUpperCase(),
        referrer: document.referrer,
        landingPage: window.location.pathname,
      }),
    }).catch(() => {}); // Silent fail, don't block UX
  }, [searchParams]);

  return null; // Invisible component
}
