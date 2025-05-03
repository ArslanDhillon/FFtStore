// 'use client';
import { prisma } from '@/lib/prisma';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const filters = ['PRICE', 'SIZE', 'COLOR', 'SALE', 'FITS', 'SORT'];


// const products = [
//     {
//         title: 'BUTTON-FRONT CROPPED TOP',
//         price: 1749,
//         oldPrice: 2499,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'EMBROIDERED POLO',
//         price: 1749,
//         oldPrice: 2499,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'STRIPED SHORTS',
//         price: 1259,
//         oldPrice: 1799,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
//     {
//         title: 'ALL OVER PRINTED T-SHIRT',
//         price: 1329,
//         oldPrice: 1899,
//         img: '/icons/shopWomenImage.webp',
//     },
// ];

export default async function ProductsList() {

    const products = await prisma.product.findMany()

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {products.map((product, idx) => (
                <Link key={idx} href={`/collections/${encodeURIComponent(product.title.toLowerCase().replace(/\s+/g, '-'))}`}>
                    <div className="relative bg-[#f2ecf3] overflow-hidden group">
                        {/* Sale Badge */}
                        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded-full z-10">Sale</span>

                        {/* Product Image */}
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={300}
                            height={400}
                            className="w-full object-cover aspect-[3/4]"
                        />

                        {/* Info Box — 90% width, centered */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] bg-white px-3 overflow-hidden h-[60px] group-hover:h-[80px] transition-all duration-300 ease-in-out z-10 shadow-sm"
                            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        >
                            <div className="flex flex-col justify-center h-full">
                                <p className="text-xs font-medium">{product.title}</p>
                                <div className="text-sm mt-1">
                                    <span className="line-through text-gray-400 text-xs mr-2">Rs.{product.oldPrice}</span>
                                    <span className="font-semibold">Rs.{product.price}</span>
                                </div>
                            </div>
                        </div>

                        {/* Shopping Bag Icon — floats above white box */}
                        <div className="absolute bottom-[75px] right-6 bg-white p-2 rounded-md shadow transition-all duration-300 group-hover:translate-y-[-10px]">
                            <ShoppingBag size={16} className="text-black" />
                        </div>
                    </div>
                </Link>

            ))}
        </div>

    );
}
