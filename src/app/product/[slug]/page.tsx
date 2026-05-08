import { getProductBySlug, getAllProducts } from "@/lib/fourthwall";
import ProductInteractive from "@/components/ProductInteractive";
import RelatedProducts from "@/components/RelatedProducts";
import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

// Allow SSR fallback for products added after the last build
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    console.log(`generateStaticParams: pre-building ${products.length} product pages`);
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (err) {
    console.error("generateStaticParams failed, falling back to SSR for all routes", err);
    return [];
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;

  // Fetch current product and all products in parallel
  const [product, allProducts] = await Promise.all([
    getProductBySlug(resolvedParams.slug),
    getAllProducts(),
  ]);

  if (!product) {
    notFound();
  }

  const cleanDescription = DOMPurify.sanitize(product.description || "");

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-label-caps font-label-caps text-on-surface-variant mb-8">
        <Link className="hover:text-primary transition-colors" href="/">Shop</Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-primary font-bold line-clamp-1">{product.name}</span>
      </nav>

      {/* Product detail */}
      <ProductInteractive product={product} cleanDescription={cleanDescription} />

      {/* Related products */}
      <RelatedProducts products={allProducts} currentSlug={resolvedParams.slug} />
    </main>
  );
}
