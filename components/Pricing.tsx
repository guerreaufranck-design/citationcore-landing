const SHOPIFY_URL = "https://apps.shopify.com/citationcore";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect to explore AI visibility for your store",
    features: [
      "AI Visibility Score",
      "Up to 5 product scans",
      "Basic competitor monitoring",
      "LLMs.txt generation",
      "Brand profile",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Starter",
    price: "$9.99",
    period: "/month",
    description: "For growing stores ready to optimize AI presence",
    features: [
      "Everything in Free, plus:",
      "25 product scans / month",
      "Advanced AI scan reports",
      "Content optimization tips",
      "Competitor benchmarking",
      "Email support",
    ],
    cta: "Start Starter Plan",
    popular: false,
  },
  {
    name: "Growth",
    price: "$24.99",
    period: "/month",
    description: "For serious brands competing for AI visibility",
    features: [
      "Everything in Starter, plus:",
      "100 product scans / month",
      "Content Planner & Assets",
      "AI-optimized descriptions",
      "Full competitor tracking",
      "Priority support",
    ],
    cta: "Start Growth Plan",
    popular: true,
  },
  {
    name: "Pro",
    price: "$49.99",
    period: "/month",
    description: "For brands that want to dominate AI recommendations",
    features: [
      "Everything in Growth, plus:",
      "Unlimited product scans",
      "White-glove onboarding",
      "Custom AI strategy report",
      "Dedicated support",
      "Early access to new features",
    ],
    cta: "Start Pro Plan",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-brand-700">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Start free.{" "}
            <span className="gradient-text">Scale when you&apos;re ready.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No credit card required. All plans include a free trial. Managed through Shopify billing.
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative feature-card rounded-2xl p-6 border h-full flex flex-col ${
                plan.popular
                  ? "border-brand-500 bg-brand-50/30 ring-2 ring-brand-500/20"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.popular
                    ? "gradient-bg text-white hover:opacity-90"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
