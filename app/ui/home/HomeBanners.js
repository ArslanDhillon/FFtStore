'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/icons/banner1.webp',
  '/icons/banner2.webp',
  '/icons/banner3.webp',
  '/icons/banner4.webp',
  '/icons/banner5.webp',
];

function HomeBanners() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full flex flex-col items-center justify-center sd
    ' overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`banner-${i}`}
          fill
          className={`object-fit absolute transition-opacity duration-1000 ease-in-out ${index === i ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
              index === i
                ? 'bg-white '
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeBanners;
