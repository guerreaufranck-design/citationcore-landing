export default function Video() {
  return (
    <section id="demo" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-brand-700">Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            See CitationCore{" "}
            <span className="gradient-text">in action</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch how CitationCore scans your store, tracks AI citations, and helps you optimize your product listings.
          </p>
        </div>

        {/* YouTube embed */}
        <div className="relative rounded-2xl overflow-hidden screenshot-shadow bg-gray-900 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/ehiVCWxsctk?rel=0&modestbranding=1"
            title="CitationCore Demo — AI Visibility for Shopify Stores"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
