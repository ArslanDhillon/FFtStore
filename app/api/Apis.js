import React from 'react'
import { prisma } from '@/lib/prisma'



export async function getProducts() {
    let products = await prisma.products.findMany()
    return products
}

export async function getCategories() {
    let categories = await prisma.categories.findMany()

    return categories
}