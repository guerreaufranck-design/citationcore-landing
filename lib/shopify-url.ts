export const SHOPIFY_URL = "https://apps.shopify.com/citationcore";

export function getShopifyUrl(): string {
  if (typeof window === "undefined") return SHOPIFY_URL;

  const match = document.cookie.match(/cc_ref=([^;]+)/);
  const ref = match?.[1] || localStorage.getItem("cc_ref");
  return ref ? `${SHOPIFY_URL}?ref=${ref}` : SHOPIFY_URL;
}
