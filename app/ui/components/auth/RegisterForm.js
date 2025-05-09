'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

export default function RegisterForm() {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = useState('')

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        let timmer = setTimeout(() => {
            if (email.length > 0) {
                checkEmail(email)
            }
        }
            , 500)
        return () => {
            clearTimeout(timmer)
        }

    }, [email])


    const checkEmail = async (email) => {
        try {
            const res = await fetch('/api/checkEmailExist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            console.log('data', data)
            if (!data.available) {
                setEmailError('Email already exists');
            } else {
                setEmailError('');
            }
        } catch (err) {
            console.error('Verification failed:', err);
        }
    };


    const registerUser = async () => {
        console.log('trying to register',)
        try {
            setLoading(true)
            let body = {
                firstName, lastName, email, password
            }
            console.log('body', body)

            //   return
            const res = await axios.post('/api/register', body, {
                headers: { 'Content-Type': 'application/json' },
            });
            const data = res.data; // ✅ correct
            setLoading(false)
            console.log("register data is", data);

            console.log("register data is", data);
        } catch (error) {
            setLoading(false)
            console.error('Error registering user:', error);
        }

    };

    return (
        <div className="h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md">
                <h2 className="text-center text-3xl font-light text-gray-700 mb-8">Create account</h2>

                <div className='flex flex-col gap-4'>

                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        placeholder="First name"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        placeholder="Last name"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />
                    {
                        emailError && (
                            <p className="text-red-600 text-sm">{emailError}</p>
                        )
                    }

                    {/* Password */}
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password"
                        className="w-full border border-gray-400 px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    />


                    {/* Sign In */}
                    <div className='w-full flex flex-col items-center'>
                        {
                            loading ? (
                                <CircularProgress size={30} />
                            ) : (
                                <button
                                    onClick={registerUser}
                                    type="submit"
                                    className="bg-gray-800 text-white py-3 px-10 mt-4 hover:bg-black transition"
                                >
                                    Create
                                </button>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
