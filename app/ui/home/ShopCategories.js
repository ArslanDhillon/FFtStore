'use client';
import { getCategories, getProducts } from '@/api/Apis';
import {useState,useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function ShopCategories() {


    const [categories,setCategoris] = useState([])

    useEffect(() => {
    getCat()
    }, [])

    const getCat =async () =>{
        let cat = await getCategories()

        setCategoris(cat)
    }


    const router = useRouter()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full h-[60vh]">
            {categories.map((cat, i) => (
                <button  key={i}
                    onClick={()=>{
                        router.push("/collections")
                    }}
                >
                    <div className="relative h-full w-full group overflow-hidden">
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
                </button>
            ))}
        </div>
    );
}
