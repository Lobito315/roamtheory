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

  const lensSize = 200; // Diameter of the magnifying glass
  const zoomFactor = 2.5;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    
    // Cursor position relative to image container
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    setZoomStyle({
      backgroundImage: `url(${images[currentIndex].url})`,
      backgroundSize: `${width * zoomFactor}px ${height * zoomFactor}px`,
      backgroundPosition: `-${x * zoomFactor - lensSize / 2}px -${y * zoomFactor - lensSize / 2}px`,
      left: `${x - lensSize / 2}px`,
      top: `${y - lensSize / 2}px`,
      width: `${lensSize}px`,
      height: `${lensSize}px`,
      borderRadius: "50%",
      position: "absolute",
      pointerEvents: "none",
      border: "4px solid white",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      display: "block",
      zIndex: 10,
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
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
        />
        
        {/* Zoomed Overlay (Lupa) */}
        {isZooming && (
          <div style={{ ...zoomStyle, backgroundRepeat: 'no-repeat' }} />
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
