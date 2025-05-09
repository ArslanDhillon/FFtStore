import { NextResponse } from 'next/server';
import prisma from '@/app/lib/Prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get('categoryId');

    const products = await prisma.product.findMany({
      where: categoryId ? { categoryId: parseInt(categoryId) } : {},
      // include: {
      //   category: true,
      // },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('❌ API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
