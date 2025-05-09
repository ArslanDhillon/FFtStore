import prisma from "@/app/lib/Prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return new Response(JSON.stringify(categories), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
