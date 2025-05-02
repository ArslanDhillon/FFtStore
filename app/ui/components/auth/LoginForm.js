'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginForm() {

    let router = useRouter()
    return (
        <div className="h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md">
                <h2 className="text-center text-3xl font-light text-gray-700 mb-8">Login</h2>

                <form className="space-y-4">
                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                    <div className="text-right">
                        <Link href="" className="text-sm text-gray-600 underline hover:text-black">
                            Forgot your password?
                        </Link>
                    </div>

                    {/* Sign In */}
                    <div className='w-full flex flex-col items-center'>
                        <button
                            type="submit"
                            className="bg-gray-800 text-white py-3 px-10 mt-4 hover:bg-black transition"
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <Link href="/auth/register" className="text-sm underline text-gray-500 hover:text-black">
                            Create account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
