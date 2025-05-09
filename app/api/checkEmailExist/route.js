import { NextResponse } from 'next/server';
import prisma from '@/app/lib/Prisma';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    const isAvailable = !existingUser;

    return NextResponse.json({ available: isAvailable });
  } catch (error) {
    console.error('❌ Email verification error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
