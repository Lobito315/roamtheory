import { getProductBySlug, getProducts } from "@/lib/fourthwall";
import ProductActions from "@/components/ProductActions";
import ImageGallery from "@/components/ImageGallery";
import RelatedProducts from "@/components/RelatedProducts";
import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;

  // Fetch current product and all products in parallel
  const [product, allProducts] = await Promise.all([
    getProductBySlug(resolvedParams.slug),
    getProducts(),
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <ImageGallery images={product.images} productName={product.name} />

        {/* Info & Actions */}
        <div className="flex flex-col">
          <h1 className="font-h1 text-h1 text-on-background mb-4">{product.name}</h1>

          <div
            className="prose prose-slate prose-p:text-on-surface-variant prose-headings:text-on-background mb-8"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />

          <div className="mt-auto">
            <ProductActions product={product} />
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts products={allProducts} currentSlug={resolvedParams.slug} />
    </main>
  );
}
