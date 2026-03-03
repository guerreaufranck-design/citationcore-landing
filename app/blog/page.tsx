import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — AI Visibility Tips for E-Commerce",
  description:
    "Learn how to optimize your Shopify store for AI recommendations. Tips on AI visibility, GEO (Generative Engine Optimization), and getting cited by ChatGPT, Perplexity, and Gemini.",
};

const posts = [
  {
    title: "What Is AI Visibility and Why Your Shopify Store Needs It",
    excerpt:
      "AI assistants are changing how people discover products. Learn what AI visibility means and how it differs from traditional SEO.",
    date: "Coming Soon",
    slug: "#",
  },
  {
    title: "GEO vs SEO: The New Frontier for E-Commerce",
    excerpt:
      "Generative Engine Optimization (GEO) is emerging as the next evolution of search optimization. Here's what Shopify merchants need to know.",
    date: "Coming Soon",
    slug: "#",
  },
  {
    title: "How to Write Product Descriptions That AI Models Love",
    excerpt:
      "AI models process text differently than search engines. Learn the key principles for writing descriptions that get cited.",
    date: "Coming Soon",
    slug: "#",
  },
];

export default function Blog() {
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
            CitationCore Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            AI visibility tips, strategies, and insights for Shopify merchants.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
            >
              <span className="text-sm text-gray-500">{post.date}</span>
              <h2 className="mt-2 text-xl font-bold text-gray-900">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            More articles coming soon. Follow us for updates!
          </p>
        </div>
      </div>
    </div>
  );
}
