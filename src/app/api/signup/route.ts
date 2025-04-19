// Import necessary modules and functions
import { PrismaClient } from "@/generated/prisma/client"; // Prisma Client for database operations
import { hash } from 'bcrypt'; // bcrypt for password hashing
import { NextResponse } from "next/server"; // NextResponse for sending HTTP responses

// Initialize Prisma Client
const prisma = new PrismaClient();

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

    // Create a new user in the database with the hashed password
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    // Return a success response with the newly created user's ID and email
    return NextResponse.json({ user: { id: user.id, email: user.email } }, { status: 201 });
}