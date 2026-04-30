import Link from "next/link";
import { getCollections, getCollectionProducts } from "@/lib/fourthwall";
import AddToCartButton from "@/components/AddToCartButton";

export default async function CollectionsPage() {
  const allCollections = await getCollections();
  
  // Filter out the "all" collection to only show custom ones like Tech, Lifestyle, Apparel
  const customCollections = allCollections.filter(c => c.slug !== "all");

  const collectionsWithProducts = await Promise.all(
    customCollections.map(async (collection) => {
      const products = await getCollectionProducts(collection.slug);
      return { ...collection, products };
    })
  );

  return (
    <main className="max-w-[1280px] mx-auto px-6 pt-12 pb-xl font-['Space_Grotesk'] antialiased">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Curated Collections</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Explore our products organized by categories. From high-tech accessories to premium apparel, find exactly what you need.
        </p>
      </div>

      {collectionsWithProducts.length === 0 && (
        <div className="p-12 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
          <span className="material-symbols-outlined text-4xl text-slate-400 mb-4">inventory_2</span>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No collections found</h2>
          <p className="text-slate-500">Create collections in your Fourthwall dashboard to see them here.</p>
        </div>
      )}

      {collectionsWithProducts.map((collection) => (
        <section key={collection.id} id={collection.slug} className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white capitalize">{collection.name}</h2>
              {collection.description && (
                <p className="text-slate-500 mt-2 max-w-3xl">{collection.description}</p>
              )}
            </div>
            <span className="text-slate-400 font-semibold text-sm mt-4 md:mt-0 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              {collection.products.length} Products
            </span>
          </div>

          {collection.products.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/20 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
              <p className="text-slate-500">No products found in this collection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collection.products.map((product) => {
                const defaultVariant = product.variants[0];
                const price = defaultVariant?.unitPrice ? defaultVariant.unitPrice.value : 0;
                const hasMultipleVariants = product.variants.length > 1;

                return (
                  <Link href={`/product/${product.slug}`} key={product.id} className="group border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex flex-col cursor-pointer hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-900/50 transition-all duration-300">
                    <div className="aspect-[4/5] overflow-hidden bg-slate-50 dark:bg-slate-800/50 relative p-6 flex items-center justify-center">
                      {product.images.length > 0 ? (
                        <img className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-700" alt={product.name} src={product.images[0].url} />
                      ) : (
                        <span className="material-symbols-outlined text-4xl text-slate-300">image</span>
                      )}
                      {hasMultipleVariants && (
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                          {product.variants.length} Options
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{collection.name}</span>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors line-clamp-2">{product.name}</h3>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="font-bold text-lg text-slate-900 dark:text-white">${price.toFixed(2)}</span>
                        <div className="scale-90 origin-right">
                          <AddToCartButton product={product} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
