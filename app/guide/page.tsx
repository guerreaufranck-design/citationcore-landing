import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started Guide — CitationCore | AI Visibility for Shopify",
  description:
    "Step-by-step guide to optimize your Shopify store for AI search engines. Learn how to use CitationCore to get cited by ChatGPT, Perplexity, Claude, and Gemini.",
};

const steps = [
  {
    number: "1",
    title: "Install CitationCore",
    description: "Add CitationCore to your Shopify store from the App Store. The free plan gets you started with no credit card required.",
    details: [
      "Go to the Shopify App Store and search for CitationCore",
      "Click 'Add app' and authorize the permissions",
      "You'll be redirected to your CitationCore dashboard",
    ],
  },
  {
    number: "2",
    title: "Run your first AI scan",
    description: "Scan your store across 4 AI engines to get your baseline visibility score.",
    details: [
      "Click 'Run Citation Scan' on your dashboard",
      "CitationCore queries ChatGPT, Claude, Gemini, and Perplexity about your products",
      "You'll receive a score out of 100 showing how visible your store is to AI",
      "Review which AI platforms cite you and which don't",
    ],
  },
  {
    number: "3",
    title: "Set up your brand profile",
    description: "Tell AI models who you are by completing your brand profile with key information.",
    details: [
      "Add your brand story, unique selling points, and target audience",
      "List your main product categories and specialties",
      "Add certifications, awards, or press mentions that build credibility",
      "This information feeds into your llms.txt and structured data",
    ],
  },
  {
    number: "4",
    title: "Generate your llms.txt file",
    description: "Create the standardized file that helps AI crawlers understand your store.",
    details: [
      "Go to Growth Tools > llms.txt Generator",
      "Review the auto-generated content based on your store data",
      "Customize sections as needed",
      "Publish — CitationCore hosts it at yourstore.com/llms.txt automatically",
    ],
  },
  {
    number: "5",
    title: "Optimize your product content",
    description: "Use AI-powered tools to rewrite product descriptions for both humans and AI models.",
    details: [
      "Select products to optimize from your catalog",
      "Generate AI-optimized descriptions that are clear, factual, and structured",
      "Create FAQ sections for your key products",
      "Add meta tags optimized for AI readability",
    ],
  },
  {
    number: "6",
    title: "Create supporting content",
    description: "Build blog posts and FAQ pages that establish your expertise and authority.",
    details: [
      "Use the AI Blog generator to create topic-relevant articles",
      "Auto-generate FAQ pages based on common customer questions",
      "Smart Description tool rewrites content for maximum AI citation potential",
      "Title Optimizer ensures your pages are well-structured",
    ],
  },
  {
    number: "7",
    title: "Monitor and improve",
    description: "Track your progress with automated scans and competitor monitoring.",
    details: [
      "Set up weekly automated scans to track score changes",
      "Enable email notifications for visibility score changes",
      "Compare your scores with competitors (Growth plan+)",
      "Use the Citation Battle feature to see head-to-head AI rankings",
      "Export reports to share with your team",
    ],
  },
];

const tips = [
  {
    title: "Be specific and factual",
    description: "AI models prefer concrete, verifiable information. Include specifications, materials, dimensions, and certifications in your product descriptions.",
  },
  {
    title: "Use structured data",
    description: "Proper schema markup (JSON-LD) helps AI crawlers understand your product catalog. CitationCore generates this automatically.",
  },
  {
    title: "Build external presence",
    description: "AI models cross-reference multiple sources. Being mentioned in forums, articles, and review sites increases your chances of being cited.",
  },
  {
    title: "Answer common questions",
    description: "FAQ pages are gold for AI visibility. When someone asks an AI a question your FAQ answers, your store is more likely to be cited.",
  },
  {
    title: "Keep content fresh",
    description: "Regular updates signal to AI crawlers that your store is active and information is current. Update product descriptions and blog content regularly.",
  },
  {
    title: "Focus on your niche",
    description: "AI models are more likely to cite you as an authority in a specific niche than as a generalist. Emphasize your specialty.",
  },
];

export default function Guide() {
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
            Getting Started Guide
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Go from invisible to cited in 7 steps. This guide walks you through setting up CitationCore and optimizing your store for AI search engines.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Pro Tips for AI Visibility</h2>
          <p className="text-gray-600 text-center mb-8">Best practices to maximize your chances of being cited by AI search engines.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gray-950 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-2">Ready to get started?</h2>
          <p className="text-gray-400 mb-6">
            Install CitationCore for free and run your first AI visibility scan in under 2 minutes.
          </p>
          <a
            href="https://apps.shopify.com/citationcore"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg text-white px-8 py-3 rounded-full font-semibold inline-block hover:opacity-90 transition-opacity"
          >
            Install on Shopify — Free
          </a>
        </div>
      </div>
    </div>
  );
}
