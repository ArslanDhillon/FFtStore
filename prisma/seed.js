const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const menId = uuidv4();
  const womenId = uuidv4();
  const kidsId = uuidv4();

  await prisma.category.createMany({
    data: [
      {
        id: menId,
        name: 'Shop Men',
        image: '/icons/shopMenImage.webp',
      },
      {
        id: womenId,
        name: 'Shop Women',
        image: '/icons/shopWomenImage.webp',
      },
      {
        id: kidsId,
        name: 'Shop Kids',
        image: '/icons/shopKidsImage.webp',
      }
    ]
  });

  // Create products
  await prisma.product.createMany({
    data: [
      {
        id: uuidv4(),
        title: 'PRINTED POLO SHIRT',
        price: 1749,
        oldPrice: 2999,
        image: '/icons/shopMenImage.webp',
        categoryId: menId
      },
      {
        id: uuidv4(),
        title: 'EMBROIDERED DRESS',
        price: 2049,
        oldPrice: 3299,
        image: '/icons/shopWomenImage.web',
        categoryId: womenId
      },
      {
        id: uuidv4(),
        title: 'KIDS GRAPHIC TEE',
        price: 1349,
        oldPrice: 1899,
        image: '/icons/shopKidsImage.web',
        categoryId: kidsId
      }
    ]
  });

  console.log('🌱 Seeded categories and products successfully!');
}

main()
  .catch(e => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
