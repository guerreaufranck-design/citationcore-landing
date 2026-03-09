import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — CitationCore | AI Visibility for Shopify",
  description:
    "Frequently asked questions about CitationCore. Learn how AI search optimization works, what llms.txt is, and how to get your Shopify store cited by ChatGPT, Perplexity, and Gemini.",
};

const faqs = [
  {
    q: "What is AI visibility?",
    a: "AI visibility refers to how often and how accurately your brand or products appear in AI-generated responses. When someone asks ChatGPT, Perplexity, or Google Gemini for product recommendations, AI visibility determines whether your store gets mentioned. It's the next frontier beyond traditional SEO.",
  },
  {
    q: "How does CitationCore work?",
    a: "CitationCore scans your store across 4 major AI engines (ChatGPT, Claude, Gemini, Perplexity) and gives you a visibility score out of 100. It then provides actionable tools to improve that score: AI-optimized product descriptions, automated llms.txt generation, structured data, FAQ pages, and blog content — all tailored for AI readability.",
  },
  {
    q: "What is llms.txt?",
    a: "llms.txt is a standardized file (similar to robots.txt for search engines) that tells AI crawlers what your site is about. It helps large language models understand your brand, products, and expertise. CitationCore generates and maintains this file automatically for your Shopify store.",
  },
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO is the practice of optimizing your online presence to appear in AI-generated search results. Unlike traditional SEO which targets Google's ranking algorithm, GEO focuses on making your content understandable and citable by AI models like ChatGPT, Perplexity, and Gemini.",
  },
  {
    q: "Does CitationCore replace my SEO app?",
    a: "No. CitationCore complements your existing SEO strategy. Traditional SEO helps you rank in Google search results. CitationCore helps you get cited in AI search results. Both channels drive traffic, and the best strategy uses both.",
  },
  {
    q: "How long does it take to see results?",
    a: "AI models update their knowledge at different intervals. Some changes (like structured data and llms.txt) can be picked up within days. Content-based improvements typically take 2-4 weeks to reflect in AI responses. CitationCore's automated scans track your progress over time.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! The free plan lets you scan your store across 4 AI engines, see your visibility score, and set up your brand profile. It supports up to 5 products and includes 15 AI credits per month. No credit card required.",
  },
  {
    q: "Which AI platforms do you support?",
    a: "CitationCore currently scans and optimizes for ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), and Perplexity. We track how your brand appears across all four platforms and provide specific recommendations for each.",
  },
  {
    q: "How is this different from schema markup apps?",
    a: "Schema markup apps help search engines understand your page structure. CitationCore goes further: it analyzes how AI models actually perceive and cite your brand, generates AI-optimized content, builds your llms.txt file, and tracks your visibility across multiple AI platforms over time.",
  },
  {
    q: "Can I track my competitors?",
    a: "Yes! Growth and Pro plans include competitor discovery and tracking. You can see which competitors are being cited for your target keywords, compare visibility scores, and get alerts when ranking positions change.",
  },
  {
    q: "How do payouts work for affiliates?",
    a: "We offer two commission models: a one-time bounty ($15-$50 per paid conversion) or recurring commissions (25-30% monthly). Payouts are processed monthly via PayPal after a 60-day holding period to account for Shopify's billing cycle. Minimum payout is $50.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to CitationCore
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about AI visibility and CitationCore.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h2>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:guerreau.franck@gmail.com"
            className="gradient-bg text-white px-8 py-3 rounded-full font-semibold inline-block hover:opacity-90 transition-opacity"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
