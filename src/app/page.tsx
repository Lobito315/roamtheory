import Link from "next/link";
import { getAllProducts } from "@/lib/fourthwall";
import AddToCartButton from "@/components/AddToCartButton";
import HeroVideo from "@/components/HeroVideo";
import ShopFilters from "@/components/ShopFilters";

const PAGE_SIZE = 9; // products per page (3×3 grid)

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string; category?: string; maxPrice?: string; inStock?: string; sort?: string }>;
}) {
  const { page: pageParam, q, category, maxPrice, inStock, sort } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10));

  // 1. Fetch all products
  const allProducts = await getAllProducts();

  // 2. Filter products based on search params
  let filteredProducts = allProducts;

  if (q) {
    const lowerQ = q.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) => p.name.toLowerCase().includes(lowerQ) || (p.description || "").toLowerCase().includes(lowerQ)
    );
  }

  if (category && category !== "All") {
    const lowerCat = category.toLowerCase();
    if (lowerCat === "tech") {
      filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes("case") || p.name.toLowerCase().includes("sleeve"));
    } else if (lowerCat === "apparel") {
      filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes("hoodie") || p.name.toLowerCase().includes("shirt") || p.name.toLowerCase().includes("tee"));
    } else if (lowerCat === "lifestyle") {
      filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes("tumbler") || p.name.toLowerCase().includes("mug"));
    }
  }

  if (maxPrice) {
    const max = parseFloat(maxPrice);
    filteredProducts = filteredProducts.filter((p) => {
      const price = p.variants[0]?.unitPrice.value || 0;
      return price <= max;
    });
  }

  // 3. Sort products
  if (sort === "Price: Low to High") {
    filteredProducts.sort((a, b) => (a.variants[0]?.unitPrice.value || 0) - (b.variants[0]?.unitPrice.value || 0));
  } else if (sort === "Price: High to Low") {
    filteredProducts.sort((a, b) => (b.variants[0]?.unitPrice.value || 0) - (a.variants[0]?.unitPrice.value || 0));
  }

  // 4. Paginate
  const total = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const products = filteredProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  // Helper to build URL with preserved search params
  const buildPageUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (inStock) params.set("inStock", inStock);
    if (sort) params.set("sort", sort);
    params.set("page", newPage.toString());
    return `/?${params.toString()}#products`;
  };

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
          <ShopFilters />
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col mb-4">
              {q && (
                <h2 className="text-2xl font-bold mb-2">Search results for "{q}"</h2>
              )}
              <span className="text-label-caps text-on-surface-variant">
                Showing {total > 0 ? (currentPage - 1) * PAGE_SIZE + 1 : 0}–{Math.min(currentPage * PAGE_SIZE, total)} of {total} products
              </span>
            </div>
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
                  href={buildPageUrl(currentPage - 1)}
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
                  href={buildPageUrl(p)}
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
                  href={buildPageUrl(currentPage + 1)}
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
