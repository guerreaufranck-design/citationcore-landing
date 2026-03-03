import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://citationcore.com";
const SITE_NAME = "CitationCore";
const SITE_DESCRIPTION =
  "Get your Shopify store recommended by AI assistants like ChatGPT, Perplexity & Gemini. Track your AI visibility score, monitor citations, and optimize your product listings for the new era of AI-powered shopping.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CitationCore — Get Your Shopify Store Recommended by AI",
    template: "%s | CitationCore",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "AI visibility",
    "Shopify app",
    "ChatGPT recommendations",
    "AI citations",
    "Perplexity shopping",
    "AI SEO",
    "LLM optimization",
    "e-commerce AI",
    "AI product recommendations",
    "Shopify SEO",
    "AI shopping assistant",
    "product visibility",
    "citation tracking",
    "AI e-commerce",
    "llms.txt",
    "GEO",
    "Generative Engine Optimization",
  ],
  authors: [{ name: "CitationCore" }],
  creator: "CitationCore",
  publisher: "CitationCore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "CitationCore — Get Your Shopify Store Recommended by AI",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "CitationCore — Get Your Shopify Store Recommended by AI",
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CitationCore",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free plan available. Paid plans from $19/month.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
    bestRating: "5",
  },
  creator: {
    "@type": "Organization",
    name: "CitationCore",
    url: SITE_URL,
  },
  screenshot: `${SITE_URL}/images/hero-screenshot.png`,
  featureList: [
    "AI Visibility Score tracking",
    "Product citation monitoring across ChatGPT, Perplexity, Gemini",
    "Competitor AI visibility benchmarking",
    "Content optimization recommendations",
    "LLMs.txt file generation",
    "AI-ready product descriptions",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI visibility for e-commerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI visibility refers to how often and how prominently your products and brand appear in AI-generated recommendations. When shoppers ask ChatGPT, Perplexity, or Gemini for product suggestions, AI visibility determines whether your store gets mentioned.",
      },
    },
    {
      "@type": "Question",
      name: "How does CitationCore track AI citations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CitationCore queries multiple AI models (ChatGPT, Perplexity, Gemini, Claude) with real shopping queries related to your products. It then analyzes the responses to check if your brand or products are mentioned, giving you a citation score for each product.",
      },
    },
    {
      "@type": "Question",
      name: "Does CitationCore work with any Shopify store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, CitationCore works with any Shopify store regardless of size or industry. Whether you sell fashion, electronics, food, or services — if customers might ask AI for recommendations in your category, CitationCore can help you get visible.",
      },
    },
    {
      "@type": "Question",
      name: "What is a LLMs.txt file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LLMs.txt is a structured file (similar to robots.txt for search engines) that helps AI models understand your store, brand, and products. CitationCore automatically generates and hosts this file for your store, making it easier for AI assistants to accurately recommend your products.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! CitationCore offers a free plan that includes AI visibility scanning across 4 engines, 15 AI credits per month, and up to 5 products. Paid plans start at $19/month for more credits, product optimization, and automated weekly scans.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
