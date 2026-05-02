"use client";

import { useState } from "react";
import Viewer360 from "./Viewer360";

interface ImageGalleryProps {
  images: { url: string }[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<"gallery" | "360">("gallery");

  const isLifestyle = productName.toLowerCase().includes("mug") || productName.toLowerCase().includes("tumbler");
  const is360Eligible = isLifestyle && images && images.length >= 8;

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden border border-outline-variant flex items-center justify-center text-slate-300">
        <span className="material-symbols-outlined text-6xl">image</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* 360 Toggle Button */}
      {is360Eligible && (
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setViewMode(viewMode === "gallery" ? "360" : "gallery")}
            className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-500 rounded-full font-bold text-sm hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {viewMode === "gallery" ? "360" : "image"}
            </span>
            {viewMode === "gallery" ? "View 360°" : "Standard View"}
          </button>
        </div>
      )}

      {/* Main Image Viewer */}
      <div
        className={`relative aspect-square bg-surface-container rounded-2xl overflow-hidden border border-outline-variant ${viewMode === "gallery" ? "cursor-zoom-in" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {viewMode === "360" && is360Eligible ? (
          <Viewer360 images={images.map(i => i.url)} />
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                if (viewMode === "360") setViewMode("gallery"); // switch back to gallery if thumbnail clicked
              }}
              className={`aspect-square bg-surface-container rounded-xl overflow-hidden border cursor-pointer transition-all ${
                i === currentIndex && viewMode === "gallery"
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
