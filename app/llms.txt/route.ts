export function GET() {
  const content = `# CitationCore
> AI Visibility Platform for Shopify Stores

## What is CitationCore?
CitationCore is a Shopify app that helps e-commerce stores get recommended by AI assistants like ChatGPT, Gemini, Claude, and Perplexity. It scans how AI models see your brand, tracks citations per product, monitors competitors, and provides tools to optimize your content for AI recommendations.

## Core Features
- AI Visibility Score: Real-time 0-100 score across ChatGPT, Gemini, Claude, and Perplexity
- Product Citation Tracking: Per-product scan to see which AIs cite you and which don't
- Competitor Intelligence: Track competitor mentions, run Citation Battles across 4 AI engines
- Content Planner: AI-generated blog posts, FAQ pages, buying guides based on uncited products
- LLMs.txt Publisher: Auto-generate and publish structured data for AI models on your store
- Product Optimization: One-click AI rewrite of titles, descriptions, tags and meta fields
- Automated Scans: Weekly visibility scans with email reports and alerts

## Pricing
- Free: $0/month — 15 AI credits, up to 5 products
- Starter: $19/month — 150 AI credits, up to 50 products, product optimization, LLMs.txt
- Growth: $49/month — 400 AI credits, up to 200 products, competitor tracking, Citation Battles
- Pro: $99/month — 1,000 AI credits, unlimited products, content generation, monthly reports

## Links
- Website: https://citationcore.com
- Shopify App Store: https://apps.shopify.com/citationcore
- YouTube Demo: https://youtu.be/ehiVCWxsctk

## Contact
- Email: guerreau.franck@gmail.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
