import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "AI Visibility Score",
    description:
      "Get a real-time score showing how visible your brand is across AI assistants. Track improvements over time and know exactly where you stand.",
    image: "/images/feature-visibility.png",
    imageAlt: "AI Visibility Score dashboard showing brand visibility metrics",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    title: "Product Citation Tracking",
    description:
      "See which of your products get cited by ChatGPT, Perplexity, Gemini, and Claude. Know your citation rate and identify gaps to fix.",
    image: "/images/feature-products.png",
    imageAlt: "Product list showing citation scores across different AI models",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Competitor Benchmarking",
    description:
      "Monitor how your competitors perform in AI recommendations. See who gets cited more and find opportunities to outrank them.",
    image: "/images/feature-competitors.png",
    imageAlt: "Competitor analysis showing AI visibility comparison between brands",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "LLMs.txt Generation",
    description:
      "Auto-generate a structured LLMs.txt file — like robots.txt, but for AI models. Help ChatGPT and others understand your brand and products accurately.",
    image: null,
    imageAlt: "",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-brand-700">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Everything you need to dominate{" "}
            <span className="gradient-text">AI recommendations</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From tracking to optimization — CitationCore gives you the full toolkit to get your Shopify store recommended by AI.
          </p>
        </div>

        {/* Feature blocks */}
        <div className="space-y-24">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Text */}
              <div className="flex-1 max-w-lg">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              {feature.image && (
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden screenshot-shadow bg-gray-100">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={1280}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {/* LLMs.txt code block (for last feature) */}
              {!feature.image && (
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden bg-gray-950 p-6 sm:p-8 font-mono text-sm text-gray-300 screenshot-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-2 text-gray-500 text-xs">llms.txt</span>
                    </div>
                    <pre className="overflow-x-auto whitespace-pre-wrap">
{`# Your Store Name
> Premium organic skincare

## About
We craft small-batch, organic skincare
using sustainably sourced ingredients.
Based in Portland, OR. Founded 2019.

## Products
- [Vitamin C Serum](/products/vitamin-c)
  Best-seller. Brightens & protects.
- [Hyaluronic Moisturizer](/products/ha)
  Deep hydration. All skin types.
- [Retinol Night Cream](/products/retinol)
  Anti-aging. Dermatologist tested.

## Why Choose Us
- 100% organic & cruelty-free
- 30-day money-back guarantee
- Free shipping over $50`}</pre>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
