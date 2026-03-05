"use client";

import { useEffect, useState } from "react";

const SHOPIFY_URL = "https://apps.shopify.com/citationcore";

export default function InstallButton() {
  const [refCode, setRefCode] = useState<string | null>(null);

  useEffect(() => {
    // Read ref from cookie
    const match = document.cookie.match(/cc_ref=([^;]+)/);
    if (match) {
      setRefCode(match[1]);
    } else {
      // Fallback to localStorage
      const stored = localStorage.getItem("cc_ref");
      if (stored) setRefCode(stored);
    }
  }, []);

  // Note: Shopify App Store doesn't pass query params to the app,
  // but we track the click-to-install funnel via the ref cookie.
  // The ref code is entered in the app onboarding screen.
  const installUrl = refCode ? `${SHOPIFY_URL}?ref=${refCode}` : SHOPIFY_URL;

  return (
    <a
      href={installUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="gradient-bg pulse-glow text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all text-center inline-flex items-center justify-center gap-2"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      Install Free on Shopify
    </a>
  );
}
