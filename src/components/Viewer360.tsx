"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Viewer360Props {
  images: string[];
}

export default function Viewer360({ images }: Viewer360Props) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const dragStartX = useRef(0);
  const frameOnDragStart = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [images]);

  // Auto rotate functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoRotate && !isDragging && imagesLoaded) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % images.length);
      }, 300); // Speed of auto-rotation
    }
    return () => clearInterval(interval);
  }, [autoRotate, isDragging, images.length, imagesLoaded]);

  // Drag logic
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setAutoRotate(false); // Stop auto-rotation when user interacts
    dragStartX.current = e.clientX;
    frameOnDragStart.current = currentFrame;
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartX.current;
    
    // Determine how many pixels of drag = 1 frame change
    const pixelsPerFrame = 15; 
    const framesMoved = Math.floor(deltaX / pixelsPerFrame);

    // Calculate new frame (wrap around if negative or > length)
    let newFrame = (frameOnDragStart.current - framesMoved) % images.length;
    if (newFrame < 0) {
      newFrame += images.length;
    }

    setCurrentFrame(newFrame);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-surface-container overflow-hidden group select-none">
      
      {/* Loading state */}
      {!imagesLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 z-20">
          <span className="material-symbols-outlined text-orange-600 animate-spin text-4xl mb-2">refresh</span>
          <span className="text-sm font-medium text-slate-500">Loading 360° View...</span>
        </div>
      )}

      {/* The 360 Viewer Canvas */}
      <div 
        ref={containerRef}
        className="relative w-full h-full cursor-grab active:cursor-grabbing touch-none flex items-center justify-center"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`360 view frame ${index}`}
            className="absolute w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal pointer-events-none"
            style={{
              opacity: currentFrame === index ? 1 : 0,
              visibility: currentFrame === index ? "visible" : "hidden"
            }}
            draggable={false}
          />
        ))}
      </div>

      {/* Controls HUD */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="material-symbols-outlined text-white text-sm">360</span>
        <span className="text-white text-xs font-medium tracking-wide mr-2">Drag to rotate</span>
        
        <div className="w-px h-4 bg-white/20"></div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setAutoRotate(!autoRotate);
          }}
          className={`flex items-center gap-1 text-xs font-bold transition-colors ${autoRotate ? 'text-orange-500' : 'text-slate-300 hover:text-white'}`}
        >
          <span className="material-symbols-outlined text-[16px]">
            {autoRotate ? 'pause_circle' : 'play_circle'}
          </span>
          {autoRotate ? 'Stop' : 'Auto'}
        </button>
      </div>

    </div>
  );
}
