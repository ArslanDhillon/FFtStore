import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/app/lib/Prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret'; // Replace in production

export async function POST(request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, password } = body;

        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { firstName, lastName, email, password: hashedPassword },
        });

        // 🔐 Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            //{ expiresIn: '1000d' } // Optional expiry
        );

        return NextResponse.json({
            message: 'User registered successfully',
            token,
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                token,
            },
        });
    } catch (error) {
        console.error('❌ Register API Error:', error);

        if (
            error instanceof PrismaClientKnownRequestError &&
            error.code === 'P2002'
        ) {
            return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
        }

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

