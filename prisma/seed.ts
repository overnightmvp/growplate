import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Electronics',
        description: 'Electronic devices and gadgets',
        image: '/images/categories/categories-01.png',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Computers',
        description: 'Laptops, desktops, and computer accessories',
        image: '/images/categories/categories-02.png',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Mobile Devices',
        description: 'Smartphones, tablets, and mobile accessories',
        image: '/images/categories/categories-03.png',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Wearables',
        description: 'Smart watches and wearable technology',
        image: '/images/categories/categories-04.png',
      },
    }),
  ])

  console.log('✅ Categories created')

  // Create products with images (based on existing shopData)
  const products = [
    {
      title: 'Havit HV-G69 USB Gamepad',
      description: 'High-quality USB gamepad for gaming enthusiasts',
      price: 59.0,
      discountedPrice: 29.0,
      reviews: 15,
      stock: 50,
      sku: 'HVGPAD001',
      categoryId: categories[0].id, // Electronics
      images: [
        { url: '/images/products/product-1-sm-1.png', type: 'THUMBNAIL', isPrimary: true },
        { url: '/images/products/product-1-sm-2.png', type: 'THUMBNAIL' },
        { url: '/images/products/product-1-bg-1.png', type: 'PREVIEW', isPrimary: true },
        { url: '/images/products/product-1-bg-2.png', type: 'PREVIEW' },
      ],
    },
    {
      title: 'iPhone 14 Plus, 6/128GB',
      description: 'Latest iPhone with advanced features and camera',
      price: 899.0,
      discountedPrice: 799.0,
      reviews: 5,
      stock: 25,
      sku: 'IPHONE14PLUS',
      categoryId: categories[2].id, // Mobile Devices
      images: [
        { url: '/images/products/product-2-sm-1.png', type: 'THUMBNAIL', isPrimary: true },
        { url: '/images/products/product-2-sm-2.png', type: 'THUMBNAIL' },
        { url: '/images/products/product-2-bg-1.png', type: 'PREVIEW', isPrimary: true },
        { url: '/images/products/product-2-bg-2.png', type: 'PREVIEW' },
      ],
    },
    {
      title: 'Apple iMac M1 24-inch 2021',
      description: 'Powerful all-in-one desktop computer with M1 chip',
      price: 1299.0,
      discountedPrice: 1199.0,
      reviews: 5,
      stock: 15,
      sku: 'IMACM124',
      categoryId: categories[1].id, // Computers
      images: [
        { url: '/images/products/product-3-sm-1.png', type: 'THUMBNAIL', isPrimary: true },
        { url: '/images/products/product-3-sm-2.png', type: 'THUMBNAIL' },
        { url: '/images/products/product-3-bg-1.png', type: 'PREVIEW', isPrimary: true },
        { url: '/images/products/product-3-bg-2.png', type: 'PREVIEW' },
      ],
    },
    {
      title: 'MacBook Air M1 chip, 8/256GB',
      description: 'Ultra-thin laptop with incredible performance and battery life',
      price: 999.0,
      discountedPrice: 899.0,
      reviews: 6,
      stock: 30,
      sku: 'MBAIRM1256',
      categoryId: categories[1].id, // Computers
      images: [
        { url: '/images/products/product-4-sm-1.png', type: 'THUMBNAIL', isPrimary: true },
        { url: '/images/products/product-4-sm-2.png', type: 'THUMBNAIL' },
        { url: '/images/products/product-4-bg-1.png', type: 'PREVIEW', isPrimary: true },
        { url: '/images/products/product-4-bg-2.png', type: 'PREVIEW' },
      ],
    },
    {
      title: 'Apple Watch Ultra',
      description: 'Most rugged and capable Apple Watch for extreme sports',
      price: 799.0,
      discountedPrice: 699.0,
      reviews: 3,
      stock: 20,
      sku: 'AWULTRA',
      categoryId: categories[3].id, // Wearables
      images: [
        { url: '/images/products/product-5-sm-1.png', type: 'THUMBNAIL', isPrimary: true },
        { url: '/images/products/product-5-sm-2.png', type: 'THUMBNAIL' },
        { url: '/images/products/product-5-bg-1.png', type: 'PREVIEW', isPrimary: true },
        { url: '/images/products/product-5-bg-2.png', type: 'PREVIEW' },
      ],
    },
    {
      title: 'Logitech MX Master 3 Mouse',
      description: 'Advanced wireless mouse for productivity and precision',
      price: 99.0,
      discountedPrice: 79.0,
      reviews: 15,
      stock: 100,
      sku: 'LOGIMX3',
      categoryId: categories[0].id, // Electronics
      images: [
        { url: '/images/products/product-6-sm-1.png', type: 'THUMBNAIL', isPrimary: true },
        { url: '/images/products/product-6-sm-2.png', type: 'THUMBNAIL' },
        { url: '/images/products/product-6-bg-1.png', type: 'PREVIEW', isPrimary: true },
        { url: '/images/products/product-6-bg-2.png', type: 'PREVIEW' },
      ],
    },
    {
      title: 'Apple iPad Air 5th Gen - 64GB',
      description: 'Powerful and versatile tablet for work and entertainment',
      price: 599.0,
      discountedPrice: 549.0,
      reviews: 15,
      stock: 40,
      sku: 'IPADAIR5',
      categoryId: categories[2].id, // Mobile Devices
      images: [
        { url: '/images/products/product-7-sm-1.png', type: 'THUMBNAIL', isPrimary: true },
        { url: '/images/products/product-7-sm-2.png', type: 'THUMBNAIL' },
        { url: '/images/products/product-7-bg-1.png', type: 'PREVIEW', isPrimary: true },
        { url: '/images/products/product-7-bg-2.png', type: 'PREVIEW' },
      ],
    },
    {
      title: 'Asus RT Dual Band Router',
      description: 'High-speed dual band wireless router for home and office',
      price: 129.0,
      discountedPrice: 99.0,
      reviews: 15,
      stock: 35,
      sku: 'ASUSRT001',
      categoryId: categories[0].id, // Electronics
      images: [
        { url: '/images/products/product-8-sm-1.png', type: 'THUMBNAIL', isPrimary: true },
        { url: '/images/products/product-8-sm-2.png', type: 'THUMBNAIL' },
        { url: '/images/products/product-8-bg-1.png', type: 'PREVIEW', isPrimary: true },
      ],
    },
  ]

  for (const productData of products) {
    const { images, ...productInfo } = productData
    
    const product = await prisma.product.create({
      data: {
        ...productInfo,
        images: {
          create: images.map((img) => ({
            url: img.url,
            type: img.type as any,
            isPrimary: img.isPrimary || false,
            altText: `${productInfo.title} image`,
          })),
        },
      },
    })

    console.log(`✅ Created product: ${product.title}`)
  }

  // Create a sample user
  const user = await prisma.user.create({
    data: {
      email: 'demo@growplate.com',
      name: 'Demo User',
    },
  })

  console.log('✅ Sample user created')

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })