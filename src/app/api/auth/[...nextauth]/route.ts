// src/app/api/auth/[...nextauth]/route.ts

// Import the NextAuth library, which is used for handling authentication in Next.js applications.
import NextAuth from "next-auth"

// Import a configuration object for NextAuth. This object likely contains settings and providers
// for authentication, such as Google, GitHub, or custom credentials.
import { authOptions } from "@/lib/auth-options"

// Create an instance of NextAuth using the authOptions configuration. This instance will handle
// authentication requests.
const handler = NextAuth(authOptions)

// Export the handler to be used for both GET and POST request. This allows the route to handle
// different types of authentication requests, such as signing in or retrieving session data.
export { handler as GET, handler as POST }
