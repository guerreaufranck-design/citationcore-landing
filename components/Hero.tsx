import Image from "next/image";
import InstallButton from "./InstallButton";

const AI_LOGOS = [
  { name: "ChatGPT", icon: "🤖" },
  { name: "Perplexity", icon: "🔍" },
  { name: "Gemini", icon: "✨" },
  { name: "Claude", icon: "🧠" },
];

export default function Hero() {
  return (
    <section className="relative hero-gradient min-h-screen flex items-center pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-700">
                Shopify App — Free plan available
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Your store is{" "}
              <span className="gradient-text">invisible to AI.</span>
              <br />
              Fix that.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              When shoppers ask ChatGPT, Perplexity, or Gemini{" "}
              <em>&quot;what&apos;s the best [product]?&quot;</em> — does your store
              show up? CitationCore tells you, and helps you get there.
            </p>

            {/* AI model pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {AI_LOGOS.map((ai) => (
                <span
                  key={ai.name}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700 shadow-sm"
                >
                  <span>{ai.icon}</span>
                  {ai.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <InstallButton />
              <a
                href="#how-it-works"
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all text-center"
              >
                See How It Works
              </a>
            </div>

            {/* Trust signal */}
            <p className="mt-6 text-sm text-gray-500">
              ✓ No credit card required &nbsp; ✓ 30-second install &nbsp; ✓ Works with any Shopify store
            </p>
          </div>

          {/* Right: Screenshot */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden screenshot-shadow bg-gray-100">
              <Image
                src="/images/hero-screenshot.png"
                alt="CitationCore Dashboard showing AI Visibility Score for a Shopify store"
                width={1280}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold">
                  72
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">AI Visibility Score</div>
                  <div className="text-xs text-brand-600">+12 pts this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
