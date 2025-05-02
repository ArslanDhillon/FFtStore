'use client';
import React from 'react';
import Link from 'next/link';

export default function RegisterForm() {
    return (
        <div className="h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md">
                <h2 className="text-center text-3xl font-light text-gray-700 mb-8">Create account</h2>

                <form className="space-y-4">
                    <input
                        
                        placeholder="First name"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                    <input
                        placeholder="Last name"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

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

                   
                    {/* Sign In */}
                    <div className='w-full flex flex-col items-center'>
                        <button
                            type="submit"
                            className="bg-gray-800 text-white py-3 px-10 mt-4 hover:bg-black transition"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
