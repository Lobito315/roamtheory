"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ShopFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Local state for immediate UI feedback before URL updates
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "1000");
  const [inStockOnly, setInStockOnly] = useState(searchParams.get("inStock") === "true");

  // Sync state if URL changes externally
  useEffect(() => {
    setCategory(searchParams.get("category") || "All");
    setMaxPrice(searchParams.get("maxPrice") || "1000");
    setInStockOnly(searchParams.get("inStock") === "true");
  }, [searchParams]);

  const updateFilters = (newCat: string, newMaxPrice: string, newInStock: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (newCat && newCat !== "All") params.set("category", newCat);
    else params.delete("category");

    if (newMaxPrice && newMaxPrice !== "1000") params.set("maxPrice", newMaxPrice);
    else params.delete("maxPrice");

    if (newInStock) params.set("inStock", "true");
    else params.delete("inStock");

    // Reset to page 1 on filter change
    params.delete("page");

    router.push(`/?${params.toString()}#products`, { scroll: false });
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    updateFilters(cat, maxPrice, inStockOnly);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  const handlePriceCommit = () => {
    updateFilters(category, maxPrice, inStockOnly);
  };

  const handleStockToggle = () => {
    const newVal = !inStockOnly;
    setInStockOnly(newVal);
    updateFilters(category, maxPrice, newVal);
  };

  return (
    <div className="sticky top-24 space-y-xl">
      <section>
        <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">
          Category
        </h3>
        <div className="space-y-3">
          {["All", "Apparel", "Tech", "Lifestyle"].map((cat) => (
            <label key={cat} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={category.toLowerCase() === cat.toLowerCase()}
                onChange={() => handleCategoryChange(cat)}
                className="w-4 h-4 rounded-full border-outline-variant text-orange-600 focus:ring-orange-600"
              />
              <span
                className={`ml-3 font-medium transition-colors ${
                  category.toLowerCase() === cat.toLowerCase()
                    ? "text-orange-600 dark:text-orange-500 font-semibold"
                    : "text-slate-600 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                }`}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">
          Max Price: ${maxPrice}
        </h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={maxPrice}
            onChange={handlePriceChange}
            onMouseUp={handlePriceCommit}
            onTouchEnd={handlePriceCommit}
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <div className="flex justify-between text-label-caps text-slate-400">
            <span>$0</span>
            <span>$1,000+</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-h3 text-label-caps text-on-surface-variant uppercase mb-md tracking-widest">
          Availability
        </h3>
        <div
          onClick={handleStockToggle}
          className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            In Stock Only
          </span>
          <div
            className={`w-10 h-5 rounded-full relative transition-colors ${
              inStockOnly ? "bg-orange-600" : "bg-slate-300 dark:bg-slate-600"
            }`}
          >
            <span
              className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${
                inStockOnly ? "right-1" : "left-1"
              }`}
            ></span>
          </div>
        </div>
      </section>
    </div>
  );
}
