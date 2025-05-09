'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ShopCategories() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        const data = await res.json();
    
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error('Invalid categories response:', data);
          setCategories([]); // fallback to empty array
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setCategories([]); // prevent .map() error
      }
    };
    

    fetchCategories();
  }, []);


  const handleOnClick = (cat) => {
    localStorage.setItem('selectedCategory', JSON.stringify(cat));
    router.push(`/collections`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full h-[60vh]">
      {categories?.map((cat, i) => (
        <div
          key={i}
          onClick={() => handleOnClick(cat)}
          className="relative h-full w-full group overflow-hidden cursor-pointer"
        >
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <span className="bg-white px-6 py-2 text-black font-semibold tracking-wide">
              {cat.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
