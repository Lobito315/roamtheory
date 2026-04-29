import { getProductBySlug } from "@/lib/fourthwall";
import ProductActions from "@/components/ProductActions";
import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Basic markdown-like or HTML description from Fourthwall might contain tags, sanitize just in case
  const cleanDescription = DOMPurify.sanitize(product.description || "");

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-label-caps font-label-caps text-on-surface-variant mb-8">
        <Link className="hover:text-primary transition-colors" href="/">Shop</Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-primary font-bold line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden border border-outline-variant">
            {product.images.length > 0 ? (
              <img 
                src={product.images[0].url} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined text-6xl">image</span>
              </div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="aspect-square bg-surface-container rounded-xl overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-colors">
                  <img src={img.url} alt={`${product.name} view ${i+2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

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
    </main>
  );
}
