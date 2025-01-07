import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Create a new product
    const newProduct = await prisma.product.create({
      data: body,
    });

    return NextResponse.json({ message: 'Product created successfully', product: newProduct }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Fetch all products
    const products = await prisma.product.findMany();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}


export async function DELETE(req:NextRequest) {
    try {
        const { id } = await req.json();
        await prisma.product.delete(
            {
                where: {
                    id: id,
                }
            }
        );
        return NextResponse.json({message: 'Product deleted'}, {status: 200})

    }catch(error){
        if (error instanceof Error){
            return NextResponse.json({error: error.message}, {status: 500})
        }
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
}