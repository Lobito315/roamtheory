import Link from "next/link";
import { getProductsPage } from "@/lib/fourthwall";
import AddToCartButton from "@/components/AddToCartButton";
import HeroVideo from "@/components/HeroVideo";

const PAGE_SIZE = 9; // products per page (3×3 grid)

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));

  const { products, total, totalPages } = await getProductsPage(currentPage, PAGE_SIZE);

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <main className="max-w-[1280px] mx-auto px-6 pt-12 pb-xl">
      <HeroVideo />

      {/* Featured Collections */}
      <section className="mb-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            { label: "Apparel", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkA_A-kQDi_xpJBQcCUeiIyZ_0O8CPWrvM3dM3RX5jWi2LheLtjtkyoF_JZIq-Qm-aWcmpvQEqRoZpN5sQsKaRHstb1HOZ1FWIP7cKAYHSFgo2vgyYYXQ6vD-4kloCkb1Tu4krIILEUpVrLj66CujrnIna2E8nDwEJjBCScyYw01zIfiTBolcjttH_QSqj3dSJ-ioBjR1o3dYS1bOGZbC0DA4-IxL7-4p9-74MyHxmJ0f0cn52J3e6n6PgBb8lJnu4ljMgDbAnXrI" },
            { label: "Tech Accessories", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo1rJTNroF_9Er5yaL_2erunS615rNIKkHIyGpSyUPYpCOAd768YPriG_HFlJubebzog99w8ckDFA5Cas4iv5a3OLB-F1hqTWpmBWrMSMz_d7m3JJJ7aoMvTdamHJBsP0ZIhgT6myPUpDxmqscA8t8WkPOykYCPFRLHxWJ512IW2TYMl0DQMDynhnB3KBB5JkP5gsQAWHv34buRSE4w1u117DMIKEzK8Mc3pwjXsZIrnB6YVaAsdUjYFrp13SzLgAXiosAXpI0PvM" },
            { label: "Lifestyle Essentials", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABZkd2Vb3W5fLhSDaRlhSg2Bd8KZABFBTDwh5QcfCvLSBzhRtxROOQe9EjiIukcBOFWVX0iANiytugYWmfTN-RWTsLc1k5PT2wEZih_YjHsbhMVB242mqYS50cKPrRoMD4qJP08vQnK7OZYlomAgtuvq6HNzxRgFUXKcW3YDBBbtoBceeWs7s879Hv_nguZTIO3lsZD-T_L-jD6IDrH4E8MTp47PXuA0Cp4N76HizcyKVbqd6gcl5ktEYNsNljYSiEkJuLaq5InJs" },
          ].map(({ label, img }) => (
            <a key={label} className="group relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-slate-200 border border-slate-200 cursor-pointer" href="#">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-90" alt={label} src={img} />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="font-h2 text-white text-2xl mb-1">{label}</h2>
                <p className="text-white/80 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  <span>Explore Collection</span>
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div id="products" className="flex flex-col md:flex-row gap-lg">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-xl">
            <section>
              <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">Category</h3>
              <div className="space-y-3">
                {["Apparel", "Tech", "Lifestyle"].map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer group">
                    <input defaultChecked={cat === "Apparel"} className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                    <span className="ml-3 font-medium text-slate-600 group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </section>
            <section>
              <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">Price Range</h3>
              <div className="space-y-4">
                <input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="1000" min="0" step="50" type="range" />
                <div className="flex justify-between text-label-caps text-slate-400">
                  <span>$0</span><span>$1,000+</span>
                </div>
              </div>
            </section>
            <section>
              <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">Availability</h3>
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-slate-100">
                <span className="text-sm font-medium">In Stock Only</span>
                <button className="w-10 h-5 bg-primary rounded-full relative transition-colors">
                  <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                </button>
              </div>
            </section>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-8">
            <span className="text-label-caps text-on-surface-variant">
              Showing {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, total)} of {total} products
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-label-caps text-on-surface-variant">Sort by</span>
              <select className="bg-transparent border-none font-medium text-sm focus:ring-0 cursor-pointer">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {products.map((product) => {
              const defaultVariant = product.variants[0];
              const price = defaultVariant?.unitPrice ? defaultVariant.unitPrice.value : 0;
              const hasMultipleVariants = product.variants.length > 1;

              return (
                <Link href={`/product/${product.slug}`} key={product.id} className="group border border-slate-200 bg-white product-card-shadow overflow-hidden flex flex-col cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative p-4 flex items-center justify-center">
                    {product.images.length > 0 ? (
                      <img className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" alt={product.name} src={product.images[0].url} />
                    ) : (
                      <span className="material-symbols-outlined text-4xl text-slate-300">image</span>
                    )}
                    {hasMultipleVariants && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-slate-900 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">{product.variants.length} Options</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-label-caps text-slate-400">Merch</span>
                    </div>
                    <h3 className="font-h3 text-body-lg text-primary mb-4 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-h3 text-h3">US${price.toFixed(2)}</span>
                      </div>
                      <AddToCartButton product={product} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-xl flex justify-center items-center space-x-2">
              {/* Prev */}
              {hasPrev ? (
                <Link
                  href={`/?page=${currentPage - 1}#products`}
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </Link>
              ) : (
                <span className="w-12 h-12 flex items-center justify-center border border-slate-200 opacity-30 cursor-not-allowed">
                  <span className="material-symbols-outlined">chevron_left</span>
                </span>
              )}

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/?page=${p}#products`}
                  className={`w-12 h-12 flex items-center justify-center font-bold transition-colors ${
                    p === currentPage
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {p}
                </Link>
              ))}

              {/* Next */}
              {hasNext ? (
                <Link
                  href={`/?page=${currentPage + 1}#products`}
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </Link>
              ) : (
                <span className="w-12 h-12 flex items-center justify-center border border-slate-200 opacity-30 cursor-not-allowed">
                  <span className="material-symbols-outlined">chevron_right</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
