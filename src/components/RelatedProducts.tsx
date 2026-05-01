"use client";

import Link from "next/link";
import { FourthwallProduct } from "@/lib/fourthwall";

interface RelatedProductsProps {
  products: FourthwallProduct[];
  currentSlug: string;
}

function formatPrice(product: FourthwallProduct): string {
  const variant = product.variants?.[0];
  if (!variant) return "";
  const { value, currency } = variant.unitPrice;
  const formatted = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `US$${formatted}`;
}

export default function RelatedProducts({ products, currentSlug }: RelatedProductsProps) {
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 8);

  if (related.length === 0) return null;

  return (
    <section className="mt-24">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">
            Explore More
          </p>
          <h2 className="text-2xl font-bold text-on-background">You Might Also Like</h2>
        </div>
        <Link
          href="/"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
        >
          View all
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {related.map((product) => {
          const image = product.images?.[0]?.url;
          const price = formatPrice(product);

          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-outline-variant bg-surface-container hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-surface-container-high relative">
                {image ? (
                  <img
                    src={image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-on-surface-variant/40">
                    <span className="material-symbols-outlined text-5xl">image</span>
                  </div>
                )}

                {/* Quick-view overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full shadow">
                    View Product
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-1 flex-1">
                <p className="text-sm font-semibold text-on-background line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </p>
                {price && (
                  <p className="text-sm text-on-surface-variant mt-auto pt-2 font-medium">
                    {price}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile "View all" link */}
      <div className="mt-6 flex justify-center sm:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
        >
          View all products
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
