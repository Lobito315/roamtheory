"use client";

import { useState, useRef, MouseEvent } from "react";

interface ImageGalleryProps {
  images: { url: string }[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    
    // Calculate cursor position as a percentage of the image dimensions
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({
      backgroundImage: `url(${images[currentIndex].url})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "250%", // Zoom level
      display: "block"
    });
  };

  const handleMouseEnter = () => {
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
    setZoomStyle({ display: "none" });
  };

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
        className="relative aspect-square bg-surface-container rounded-2xl overflow-hidden border border-outline-variant cursor-crosshair group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          ref={imageRef}
          src={images[currentIndex].url} 
          alt={`${productName} view ${currentIndex + 1}`} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${isZooming ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Zoomed Overlay */}
        {isZooming && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              ...zoomStyle,
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`aspect-square bg-surface-container rounded-xl overflow-hidden border cursor-pointer transition-all ${
                i === currentIndex ? 'border-primary ring-2 ring-primary/20' : 'border-outline-variant hover:border-primary/50'
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
