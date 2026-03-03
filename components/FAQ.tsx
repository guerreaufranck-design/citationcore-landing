"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is AI visibility for e-commerce?",
    answer:
      "AI visibility refers to how often and how prominently your products and brand appear in AI-generated recommendations. When shoppers ask ChatGPT, Perplexity, or Gemini for product suggestions, AI visibility determines whether your store gets mentioned. It's like SEO, but for AI assistants instead of search engines.",
  },
  {
    question: "How does CitationCore track AI citations?",
    answer:
      "CitationCore queries multiple AI models (ChatGPT, Perplexity, Gemini, Claude) with real shopping queries related to your products. It then analyzes the responses to check if your brand or products are mentioned, giving you a citation score for each product and an overall AI visibility score for your store.",
  },
  {
    question: "Does CitationCore work with any Shopify store?",
    answer:
      "Yes! CitationCore works with any Shopify store regardless of size or industry. Whether you sell fashion, electronics, food, home goods, or services — if customers might ask AI for recommendations in your category, CitationCore can help you get visible.",
  },
  {
    question: "What is a LLMs.txt file?",
    answer:
      "LLMs.txt is a structured file — similar to robots.txt for search engines — that helps AI models understand your store, brand, and products. CitationCore automatically generates and hosts this file on your store, making it easier for AI assistants to accurately recommend your products.",
  },
  {
    question: "How is this different from traditional SEO?",
    answer:
      "Traditional SEO optimizes for Google's search algorithm. AI visibility optimization (sometimes called GEO — Generative Engine Optimization) optimizes for how AI models understand and recommend your brand. The ranking factors are different: AI cares more about brand reputation, product uniqueness, clear descriptions, and structured data than backlinks or keyword density.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes! CitationCore offers a generous free plan that includes your AI visibility score, up to 5 product scans, basic competitor monitoring, and LLMs.txt generation. Paid plans start at $9.99/month for more scans, advanced analytics, and content optimization tools.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "You'll see your AI visibility score immediately after your first scan. Improving your actual citations in AI responses takes time — typically 2-4 weeks for initial improvements as you optimize your content and AI models update their knowledge. CitationCore helps you track this progress over time.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. All paid plans are managed through Shopify billing. You can upgrade, downgrade, or cancel anytime directly from your Shopify admin. No lock-in, no cancellation fees.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-8">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-brand-700">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ items */}
        <div className="bg-white rounded-2xl border border-gray-200 px-6 sm:px-8 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
