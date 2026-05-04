"use server";

import { getProducts } from "@/lib/fourthwall";

export async function getRelatedProductsAction() {
  try {
    const products = await getProducts();
    // Return the first 4 products as suggestions
    return products.slice(0, 4);
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}
