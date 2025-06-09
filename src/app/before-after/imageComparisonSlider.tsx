/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const ImageComparisonSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: ImageComparisonSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0]!.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full cursor-ew-resize overflow-hidden select-none"
      onClick={handleClick}
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover pointer-events-none"
          priority
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
        <div className="absolute bottom-4 right-4 rounded bg-black/50 px-2 py-1 text-sm font-medium text-white pointer-events-none">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover pointer-events-none"
          priority
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
        <div className="absolute bottom-4 left-4 rounded bg-black/50 px-2 py-1 text-sm font-medium text-white pointer-events-none">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 z-10 h-full w-0.5 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110 pointer-events-auto"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onDragStart={(e) => e.preventDefault()}
        >
          <div className="flex space-x-1 pointer-events-none">
            <div className="h-4 w-0.5 bg-gray-400"></div>
            <div className="h-4 w-0.5 bg-gray-400"></div>
            <div className="h-4 w-0.5 bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded bg-black/50 px-3 py-1 text-xs text-white opacity-75 pointer-events-none">
        Drag to compare
      </div>
    </div>
  );
};

export default ImageComparisonSlider;