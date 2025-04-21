// Import necessary modules and functions
// import { PrismaClient } from "@/generated/prisma/client"; // Prisma Client for database operations
import { prisma } from '@/lib/prisma';
import { hash } from 'bcrypt'; // bcrypt for password hashing
import { NextResponse } from "next/server"; // NextResponse for sending HTTP responses

// Initialize Prisma Client
// const prisma = new PrismaClient();

// Define the POST request handler
export async function POST(req: Request) {
    // Parse the request body to get user data
    const { name, email, password } = await req.json();

    // Check if a user with the provided email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    // If a user with the same email exists, return an error response
    if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the user's password for security
    const hashedPassword = await hash(password, 10);

    // Generate initials from name
    const initials = name
      ?.split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials || 'U')}&background=0D8ABC&color=fff&rounded=true&size=128`


    // Create a new user in the database with the hashed password
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            avatar: avatarUrl
        }
    })

    // Return a success response with the newly created user's ID and email
    return NextResponse.json({ user: { id: user.id, email: user.email } }, { status: 201 });
}