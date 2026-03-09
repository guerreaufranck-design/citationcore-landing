"use client";

import { useEffect, useState } from "react";
import { getShopifyUrl, SHOPIFY_URL } from "@/lib/shopify-url";

export default function CTA() {
  const [installUrl, setInstallUrl] = useState(SHOPIFY_URL);

  useEffect(() => {
    setInstallUrl(getShopifyUrl());
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-gray-950 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Stop being invisible.
          <br />
          <span className="gradient-text">Start getting recommended.</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Join forward-thinking Shopify merchants who are preparing their stores for the AI-powered shopping era. Install CitationCore today — it&apos;s free to start.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={installUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg pulse-glow text-white px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            Install Free on Shopify
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          ✓ Free plan forever &nbsp; ✓ No credit card &nbsp; ✓ 30-second install &nbsp; ✓ Cancel anytime
        </p>

        <p className="mt-4 text-sm text-gray-600">
          Not on Shopify?{" "}
          <a
            href="https://citationcore.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors"
          >
            CitationCore is also available for WordPress, WooCommerce &amp; any website →
          </a>
        </p>
      </div>
    </section>
  );
}
