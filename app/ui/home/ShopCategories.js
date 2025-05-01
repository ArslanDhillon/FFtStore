'use client';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        label: 'SHOP MEN',
        image: '/icons/shopMenImage.webp',
        href: '/collections',
    },
    {
        label: 'SHOP KIDS',
        image: '/icons/shopKidsImage.webp',
        href: '/collections',
    },
    {
        label: 'SHOP WOMEN',
        image: '/icons/shopWomenImage.webp',
        href: '/collections',
    },
];

export default function ShopCategories() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-[20vh]">
            {categories.map((cat, i) => (
                <div key={i} className="relative h-full w-full group overflow-hidden">
                    <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                        <Link
                            href={cat.href}
                            className="bg-white px-6 py-2 text-black font-semibold tracking-wide"
                        >
                            {cat.label}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
