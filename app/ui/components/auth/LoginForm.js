'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setLoading(true)
            const res = await axios.post('/api/login', { email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setLoading(false)
            console.log('Login success:', res.data);

            // Store JWT (optional: could use cookies instead)
            localStorage.setItem('User', res.data);
            // Redirect on success
            router.push('/');
        } catch (err) {
            setLoading(false)
            console.error('Login failed:', err);
            setError(err?.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div className="h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md">
                <h2 className="text-center text-3xl font-light text-gray-700 mb-8">Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <div className="text-right">
                        <Link href="" className="text-sm text-gray-600 underline hover:text-black">
                            Forgot your password?
                        </Link>
                    </div>

                    <div className='w-full flex flex-col items-center'>
                        {
                            
                        }
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
