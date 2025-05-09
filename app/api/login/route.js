import { NextResponse } from 'next/server';
import prisma from '@/app/lib/Prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // ✅ Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email,firstName: user.firstName, lastName: user.lastName },
      process.env.JWT_SECRET,
      // { expiresIn: '7d' }
    );

    // Optional: set cookie (comment this block if you're returning token directly)
    // const response = NextResponse.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
    // response.cookies.set('token', token, { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 });
    // return response;

    return NextResponse.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    console.error('❌ Login Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
