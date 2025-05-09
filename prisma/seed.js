const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

process.env.DATABASE_URL = 'postgresql://neondb_owner:npg_0lrdhscLgb6S@ep-wandering-field-a4b8c36j.us-east-1.aws.neon.tech/neondb?sslmode=require';

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: 'john@example.com',
      password: 'hashed_password_here', // Replace with a hashed password
      firstName: 'John',
      lastName: 'Doe',
    },
  });

  
  

  const category1 = await prisma.category.create({
    data: {
      name: 'Shirts',
      image: '/icons/shopMenImage.webp',
    },
  });
  
  const category2 = await prisma.category.create({
    data: {
      name: 'Pents',
      image: '/icons/shopMenImage.webp',
    },
  });
  
  const product = await prisma.product.create({
    data: {
      title: 'Cotton T-Shirt',
      description: 'Comfortable cotton t-shirt',
      price: 1999,
      categoryId: category1.id,
      images: {
        create: [
          { url: '/icons/shopMenImage.webp' },
          { url: '/icons/shopMenImage.webp' },
        ],
      },
      variants: {
        create: [
          { size: 'S', quantity: 10 },
          { size: 'M', quantity: 15 },
          { size: 'L', quantity: 5 },
        ],
      },
    },
    include: {
      variants: true, // <-- This includes created variants
    },
  });
  

  await prisma.order.create({
    data: {
      userId: user.id,
      items: {
        create: [
          {
            productId: product?.id,
            variantId: product?.variants[0]?.id,
            quantity: 2,
            size: 'M',
            price: 1999,
          },
        ],
      },
    },
  });

  console.log('✅ Seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
