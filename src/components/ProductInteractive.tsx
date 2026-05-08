"use client";

import { useState } from "react";
import { FourthwallProduct, FourthwallVariant } from "@/lib/fourthwall";
import ImageGallery from "./ImageGallery";
import ProductActions from "./ProductActions";

interface ProductInteractiveProps {
  product: FourthwallProduct;
  cleanDescription: string;
}

export default function ProductInteractive({ product, cleanDescription }: ProductInteractiveProps) {
  const [selectedVariant, setSelectedVariant] = useState<FourthwallVariant>(product.variants[0]);

  // Si la variante tiene sus propias imágenes, las mostramos. 
  // De lo contrario, volvemos a mostrar las imágenes generales del producto.
  // Para garantizar que siempre haya una imagen preseleccionada inicial, 
  // usamos product.images[0] si es que la variante no tiene imágenes.
  const displayImages = (selectedVariant.images && selectedVariant.images.length > 0)
    ? selectedVariant.images
    : (product.images.length > 0 ? [product.images[0]] : []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Images */}
      <ImageGallery images={displayImages} productName={product.name} />

      {/* Info & Actions */}
      <div className="flex flex-col">
        <h1 className="font-h1 text-h1 text-on-background mb-4">{product.name}</h1>

        <div
          className="prose prose-slate prose-p:text-on-surface-variant prose-headings:text-on-background mb-8"
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
        />

        <div className="mt-auto">
          <ProductActions 
            product={product} 
            selectedVariant={selectedVariant}
            onVariantSelect={setSelectedVariant}
          />
        </div>
      </div>
    </div>
  );
}
