// lib/prisma.ts

// Import the PrismaClient from the generated Prisma client module
import { PrismaClient } from '@/generated/prisma/client'

// Define a global object to hold the PrismaClient instance.
// This is done to ensure that only one instance of PrismaClient is created
// which is important for performance and resource management
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Export the PrismaClient instance.
// If the global object already has a PrismaClient instance, use it.
// Otherwise, create a new PrismaClient instance with query logging enabled.
export const prisma =
  globalForPrisma.prisma ?? // Check if globalForPrisma.prisma is already defined
  new PrismaClient({
    log: ['query'], // Enable logging for queries
  })

// If the environment is not production, assign the PrismaClient instance
// to the global object. This ensures that the same instance is reused
// across different modules and hot reloads in development.
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
