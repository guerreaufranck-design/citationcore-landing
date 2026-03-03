export default function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            AI is the new shopping assistant.
            <br />
            <span className="text-gray-400">Is your store part of the conversation?</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-extrabold gradient-text">58%</div>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                of consumers have used AI to research products before buying
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold gradient-text">4x</div>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                higher conversion rate when a brand is recommended by AI
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold gradient-text">0%</div>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                of Shopify stores are actively optimizing for AI visibility
              </p>
            </div>
          </div>

          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center mt-1">
                <span className="text-lg">💬</span>
              </div>
              <div className="text-left">
                <p className="text-gray-300 italic text-lg">
                  &quot;Hey ChatGPT, what&apos;s the best organic skincare brand I can buy online?&quot;
                </p>
                <p className="mt-4 text-gray-500 text-sm">
                  → If your store isn&apos;t in that answer, you&apos;re losing sales to competitors who are. <strong className="text-white">CitationCore shows you exactly where you stand.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
