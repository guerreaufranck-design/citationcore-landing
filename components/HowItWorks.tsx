const steps = [
  {
    number: "01",
    title: "Install in 30 seconds",
    description:
      "Add CitationCore to your Shopify store. No code, no configuration. Your products are automatically imported.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Scan your AI visibility",
    description:
      "CitationCore queries ChatGPT, Perplexity, Gemini, and Claude with real shopping queries. You see exactly where your brand appears — and where it doesn't.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Optimize & grow",
    description:
      "Follow actionable recommendations to improve your product descriptions, brand profile, and content. Watch your AI citation score climb.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-brand-700">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            From invisible to{" "}
            <span className="gradient-text">AI-recommended</span>
            {" "}in 3 steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-brand-300 to-accent-400 opacity-30" />
              )}

              <div className="feature-card bg-white rounded-2xl p-8 border border-gray-100 text-center h-full">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
