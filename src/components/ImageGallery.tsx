"use client";

import { useState } from "react";

interface ImageGalleryProps {
  images: { url: string }[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden border border-outline-variant flex items-center justify-center text-slate-300">
        <span className="material-symbols-outlined text-6xl">image</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image Viewer */}
      <div
        className="relative aspect-square bg-surface-container rounded-2xl overflow-hidden border border-outline-variant cursor-zoom-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentIndex].url}
          alt={`${productName} view ${currentIndex + 1}`}
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? "scale(1.65)" : "scale(1)",
            transformOrigin: "center center",
          }}
        />

        {/* Zoom hint badge */}
        <div
          className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full transition-opacity duration-300"
          style={{ opacity: isHovered ? 0 : 1 }}
        >
          <span className="material-symbols-outlined text-sm">zoom_in</span>
          <span>Zoom</span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`aspect-square bg-surface-container rounded-xl overflow-hidden border cursor-pointer transition-all ${
                i === currentIndex
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-outline-variant hover:border-primary/50"
              }`}
            >
              <img
                src={img.url}
                alt={`${productName} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
