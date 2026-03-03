import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CitationCore Privacy Policy — How we handle your data.",
};

export default function Privacy() {
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

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last updated: March 2026</p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            When you install CitationCore on your Shopify store, we access the following data through the Shopify API:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Store name and domain</li>
            <li>Store owner email address</li>
            <li>Product catalog information (titles, descriptions, prices, images)</li>
            <li>App subscription and billing information</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Data</h2>
          <p className="text-gray-600 mb-4">We use your data exclusively to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Provide the CitationCore service (AI visibility scanning, citation tracking)</li>
            <li>Generate LLMs.txt files for your store</li>
            <li>Send product-related communications and support</li>
            <li>Improve our service</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Data Sharing</h2>
          <p className="text-gray-600 mb-6">
            We do not sell your data to third parties. We may share anonymized, aggregated data for research purposes. We use the following third-party services: Shopify (authentication), Supabase (database hosting), Resend (transactional emails), and AI model APIs (OpenAI, Anthropic, Google, Perplexity) for citation analysis.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Retention</h2>
          <p className="text-gray-600 mb-6">
            We retain your data for as long as the app is installed on your store. Upon uninstallation, your data is deleted within 30 days.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact</h2>
          <p className="text-gray-600">
            For privacy-related inquiries, contact us at:{" "}
            <a href="mailto:guerreau.franck@gmail.com" className="text-brand-600 hover:text-brand-700">
              guerreau.franck@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
