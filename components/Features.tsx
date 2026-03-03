import Image from "next/image";

const features = [
  {
    id: "visibility",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "AI Visibility Score",
    description:
      "Get a score from 0 to 100 showing how visible your brand is across ChatGPT, Gemini, Claude, and Perplexity. Each scan queries all 4 AI engines with real shopping prompts and checks if they recommend you. Track your score over time with weekly automated scans.",
    image: "/images/feature-visibility.png",
    imageAlt: "AI Visibility Score dashboard showing scores per AI engine — ChatGPT 75%, Gemini 70%, Perplexity 78%, Claude 68%",
  },
  {
    id: "products",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    title: "Product Citation Tracking",
    description:
      "Scan each product individually to see which AI models cite it and which don't. Get a citation score per product, identify the ones AI ignores, and optimize them with one-click AI rewrite of titles, descriptions, tags, and meta fields — published directly to Shopify.",
    image: "/images/feature-products.png",
    imageAlt: "Product list showing citation scores per product — 85%, 78%, 72%, 68% — with Scan buttons",
  },
  {
    id: "content",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Content Planner & Generator",
    description:
      "Smart content recommendations based on your scan results. CitationCore identifies uncited products and suggests buying guides, FAQ pages, and blog posts that can help AI cite you. Pro plan auto-generates and publishes content directly to Shopify.",
    image: "/images/feature-content-planner.png",
    imageAlt: "Content Planner showing AI-recommended buying guides and FAQ pages to improve citations",
  },
  {
    id: "competitors",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Competitor Intelligence",
    description:
      "Discover which competitors AI recommends instead of you. Track their mention count over time, run head-to-head Citation Battles across all 4 AI engines, and get daily alerts when competitors gain visibility.",
    visual: "competitor-table",
  },
  {
    id: "llms",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "LLMs.txt Publisher",
    description:
      "Generate and publish a structured llms.txt file on your store — like robots.txt, but for AI models. Tells ChatGPT, Perplexity, Claude exactly what your store offers so they can recommend you accurately.",
    visual: "code",
  },
  {
    id: "automation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Automated Scans & Alerts",
    description:
      "Weekly automated visibility scans, email reports, competitor evolution alerts, and monthly performance reports (Pro). Set it and forget it — CitationCore monitors your AI presence 24/7.",
    visual: "alerts",
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
            CitationCore scans ChatGPT, Gemini, Claude &amp; Perplexity with real shopping queries — then gives you the tools to get cited.
          </p>
        </div>

        {/* Feature blocks */}
        <div className="space-y-24">
          {features.map((feature, i) => (
            <div
              key={feature.id}
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

              {/* Screenshot image */}
              {"image" in feature && feature.image && (
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden screenshot-shadow bg-gray-100">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt || ""}
                      width={1280}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}

              {/* Competitor table visual */}
              {"visual" in feature && feature.visual === "competitor-table" && (
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 screenshot-shadow">
                    <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                      <span className="text-sm font-semibold text-gray-700">Citation Battle — Your Store vs Competitors</span>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {[
                        { name: "Your Store", chatgpt: true, gemini: true, perplexity: true, claude: false, score: 75 },
                        { name: "Competitor A", chatgpt: true, gemini: false, perplexity: true, claude: true, score: 72 },
                        { name: "Competitor B", chatgpt: false, gemini: true, perplexity: false, claude: true, score: 48 },
                        { name: "Competitor C", chatgpt: true, gemini: false, perplexity: false, claude: false, score: 25 },
                      ].map((row) => (
                        <div key={row.name} className={`flex items-center px-6 py-3 ${row.name === "Your Store" ? "bg-brand-50/50" : ""}`}>
                          <span className={`flex-1 text-sm ${row.name === "Your Store" ? "font-bold text-brand-700" : "text-gray-700"}`}>{row.name}</span>
                          {[row.chatgpt, row.gemini, row.perplexity, row.claude].map((cited, j) => (
                            <span key={j} className="w-16 text-center">
                              {cited ? (
                                <span className="inline-block w-5 h-5 rounded-full bg-brand-500 text-white text-xs leading-5">✓</span>
                              ) : (
                                <span className="inline-block w-5 h-5 rounded-full bg-red-100 text-red-400 text-xs leading-5">✕</span>
                              )}
                            </span>
                          ))}
                          <span className={`w-16 text-right text-sm font-bold ${row.score >= 70 ? "text-brand-600" : row.score >= 40 ? "text-amber-600" : "text-red-500"}`}>
                            {row.score}%
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 py-2 bg-gray-50 border-t border-gray-200 flex justify-between text-xs text-gray-400">
                      <span></span>
                      <div className="flex gap-6">
                        <span>ChatGPT</span>
                        <span>Gemini</span>
                        <span>Perplexity</span>
                        <span>Claude</span>
                        <span>Score</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LLMs.txt code block */}
              {"visual" in feature && feature.visual === "code" && (
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden bg-gray-950 p-6 sm:p-8 font-mono text-sm text-gray-300 screenshot-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-2 text-gray-500 text-xs">yourstore.com/llms.txt</span>
                    </div>
                    <pre className="overflow-x-auto whitespace-pre-wrap">
{`# Your Store Name
> Premium organic skincare

## About
Small-batch, organic skincare.
Sustainably sourced. Portland, OR.

## Products
- [Vitamin C Serum](/products/vitamin-c)
  Best-seller. Brightens & protects.
- [Hyaluronic Moisturizer](/products/ha)
  Deep hydration. All skin types.
- [Retinol Night Cream](/products/retinol)
  Anti-aging. Dermatologist tested.

## Why Choose Us
- 100% organic & cruelty-free
- 30-day money-back guarantee`}</pre>
                  </div>
                </div>
              )}

              {/* Automation alerts visual */}
              {"visual" in feature && feature.visual === "alerts" && (
                <div className="flex-1 space-y-4">
                  {[
                    { title: "Weekly Scan Complete", desc: "Your AI Visibility Score: 72 (+5 pts)", time: "Every Monday, 8am", color: "bg-brand-500" },
                    { title: "Competitor Alert", desc: "Burton just gained +12% AI visibility in snowboards", time: "Daily monitoring", color: "bg-red-500" },
                    { title: "Score Drop Alert", desc: "Your score dropped 10+ points — action needed", time: "Real-time", color: "bg-amber-500" },
                    { title: "Monthly Report", desc: "Your March performance report is ready (Pro)", time: "1st of each month", color: "bg-accent-500" },
                  ].map((alert) => (
                    <div key={alert.title} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className={`w-2 h-2 rounded-full ${alert.color} mt-2 shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900">{alert.title}</div>
                        <div className="text-sm text-gray-600">{alert.desc}</div>
                        <div className="text-xs text-gray-400 mt-1">{alert.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
