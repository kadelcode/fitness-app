// Import the NextAuthOptions type from next-auth
import type { NextAuthOptions } from "next-auth"

// Import the CredentialsProvider for handling custom authentication
import CredentialsProvider from "next-auth/providers/credentials"

// Import the Prisma client for database operations
import { prisma } from "@/lib/prisma"

// Import the compare function from bcrypt for password verification
import { compare } from "bcrypt"

// Define the authentication options for NextAuth
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // Define the name of the provider
      name: "Credentials",

      // Specify the credentials required for authentication
      credentials: {
        email: { label: "Email", type: "text" }, // Email field with label and type
        password: { label: "Password", type: "password" }, // Password field with label and type
      },

      // Authorize function to handle user authentication
      async authorize(credentials) {
        // Check if email or password is missing
        if (!credentials?.email || !credentials.password) return null

        // Find the user in the database by email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        // If user not found, return null
        if (!user) return null

        // Compare the provided password with the hashed password in the database
        const isValid = await compare(credentials.password, user.password)
        if (!isValid) return null; // If password is invalid, return null

        // Return user information if authentication is successful
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],

  callbacks: {
    async session({ session }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user?.email! },
      })

      if (dbUser) {
        session.user.id = dbUser.id
        session.user.avatar = dbUser.avatar;
      }

      return session;
    }
  },
  
  session: {
    strategy: "jwt", // Use JSON Web Tokens (JWT) for session management
    maxAge: 24 * 60 * 60, // Session expiration time in seconds (e.g., 24 hours)
  },

  pages: {
    signIn: "/login", // Custom sign-in page URL
  },

  // Secret key for encryption, retrieved from environment variables
  secret: process.env.NEXTAUTH_SECRET,
}
