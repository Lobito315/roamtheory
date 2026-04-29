const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_FOURTHWALL_STOREFRONT_TOKEN;
const API_URL = "https://storefront-api.fourthwall.com/v1";

export interface FourthwallVariant {
  id: string;
  name: string;
  unitPrice: {
    value: number;
    currency: string;
  };
}

export interface FourthwallProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  images: { url: string }[];
  variants: FourthwallVariant[];
}

export async function getProducts(): Promise<FourthwallProduct[]> {
  const res = await fetch(`${API_URL}/collections/all/products?storefront_token=${STOREFRONT_TOKEN}`, {
    next: { revalidate: 60 } // Cache for 1 minute
  });
  
  if (!res.ok) {
    console.error("Failed to fetch products from Fourthwall", await res.text());
    return [];
  }

  const data = await res.json();
  return data.results || [];
}

export async function getProductBySlug(slug: string): Promise<FourthwallProduct | null> {
  // Since there isn't a direct endpoint to get by slug with the public token easily documented,
  // we fetch all and filter.
  const products = await getProducts();
  return products.find(p => p.slug === slug) || null;
}
