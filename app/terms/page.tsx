import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CitationCore Terms of Service.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to CitationCore
        </Link>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last updated: March 2026</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By installing and using CitationCore (&quot;the App&quot;), you agree to these Terms of Service. The App is available through the Shopify App Store and is subject to Shopify&apos;s Terms of Service.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Service Description</h2>
          <p className="text-gray-600 mb-6">
            CitationCore provides AI visibility tracking, citation monitoring, competitor analysis, and content optimization tools for Shopify stores. The service analyzes how AI assistants reference your products and brand.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Subscription and Billing</h2>
          <p className="text-gray-600 mb-6">
            All billing is managed through Shopify. You can subscribe to different plans with varying features and limits. You may cancel, upgrade, or downgrade your plan at any time through your Shopify admin.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Limitations</h2>
          <p className="text-gray-600 mb-6">
            AI visibility scores and citation data are provided as informational metrics. We do not guarantee specific outcomes in AI recommendations. AI model behavior is determined by their respective providers (OpenAI, Google, Anthropic, etc.) and is outside our control.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact</h2>
          <p className="text-gray-600">
            For questions about these terms, contact us at:{" "}
            <a href="mailto:guerreau.franck@gmail.com" className="text-brand-600 hover:text-brand-700">
              guerreau.franck@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
