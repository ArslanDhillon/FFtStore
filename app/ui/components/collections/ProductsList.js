'use client';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const filters = ['PRICE', 'SIZE', 'COLOR', 'SALE', 'FITS', 'SORT'];



export default function ProductsList({ categoryId }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            console.log('trying to get list',)
            let cat = localStorage.getItem('selectedCategory');
            if (cat) {
                let selectedCat = JSON.parse(cat);
                console.log('selectedCat', selectedCat)
                let path = `/api/products${selectedCat ? `?categoryId=${selectedCat.id}` : ''}`
                console.log('path', path)
                const res = await fetch(path);
                console.log('res', res)
                // return
                const data = await res.json();
                console.log('data', data)
                setProducts(data);
            }else{
                console.log('no selected category found', )
            }
        };

        fetchData();
    }, [categoryId]);


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
