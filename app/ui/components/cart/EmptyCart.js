import Link from 'next/link'
import React from 'react'

function EmptyCart() {
    return (
        <div className='h-[100vh] w-full flex flex-col items-center justify-center gap-3'>
            <div
                style={{
                    fontSize: 24, fontWeight: '300', color: 'black'
                }}
            >
                Your cart is empty
            </div>

            <button
                className="bg-gray-800 text-white py-3 px-10 mt-4 hover:bg-black transition"
            >
                Continue shopping
            </button>

            <div
                style={{
                    fontSize: 18, fontWeight: '500', color: 'black',marginTop:50
                }}
            >
                Have an account?
            </div>

            <div className='flex flex-row items-cetner gap-3'>
                <Link href={'/auth/login'}
                    style={{
                        fontSize: 16, fontWeight: '400', color: 'black', textDecorationLine: 'underline'
                    }}
                >
                    Log in
                </Link>
                <div
                    style={{
                        fontSize: 16, fontWeight: '400', color: '#00000080'
                    }}
                >
                    to check out faster.
                </div>
            </div>

        </div>
    )
}

export default EmptyCart