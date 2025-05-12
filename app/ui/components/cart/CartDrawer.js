import { Drawer } from '@mui/material'
import { X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import EmptyCart from './EmptyCart'
import { useRouter } from 'next/navigation'

function CartDrawer({
    open,
    handleClose,
    handleOnClick
}) {

    const router = useRouter()
    const [qty, setQty] = useState(2);

    const handleQty = (type) => {
        setQty((prev) => (type === 'dec' && prev > 1 ? prev - 1 : type === 'inc' ? prev + 1 : prev));
    };


    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => {
                handleClose()
            }}
            PaperProps={{
                sx: {
                    width: "30%", // Adjust width as needed
                    boxShadow: 3, // Light shadow

                    backgroundColor: "white", // Ensure it's visible
                    height: "100%",
                    overflow: "hidden",
                    scrollbarWidth: "none",
                },
            }}
            BackdropProps={{
                timeout: 100,
                sx: {
                    backgroundColor: "#ffffff80",
                    // //backdropFilter: "blur(20px)",
                },
            }}
        >
            <div
                className={"w-full"}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                    <h2 className="text-2xl font-light">Your cart</h2>
                    <button onClick={handleClose}>
                        <X size={24} />
                    </button>
                </div>

                {/* Product */}
                <div className="p-6 flex gap-4">
                    <Image src="/icons/shopMenImage.webp" alt="product" width={100} height={140} className="object-cover" />

                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <p className="text-gray-800 font-medium">Striped Shorts</p>
                            <p className="text-sm text-gray-500">7-8 Y, Skin Black, Boy</p>
                            <p className="text-sm mt-1">Rs. 1,259.00</p>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            {/* Quantity Selector */}
                            <div className="border flex items-center justify-between w-[120px] px-3 py-1 text-lg">
                                <button onClick={() => handleQty('dec')}>−</button>
                                <span>{qty}</span>
                                <button onClick={() => handleQty('inc')}>+</button>
                            </div>
                            {/* Remove */}
                            <button className="text-sm underline text-gray-700 hover:text-black">REMOVE</button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-700">Estimated total</span>
                        <span className="text-sm font-semibold">Rs. {qty * 1259}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                        Taxes, discounts and <span className="underline">shipping</span> calculated at checkout.
                    </p>
                    <button className="w-full bg-gray-800 text-white py-3 uppercase tracking-wider hover:bg-black transition"
                        onClick={() => {
                            router.push('/checkouts')
                        }}
                    >

                        Checkout
                    </button>
                </div>
            </div>
        </Drawer >
    )
}

export default CartDrawer