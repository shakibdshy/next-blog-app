import client from "@/config/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions:AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) { 
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }
        
        const user = await client.user.findUnique({
          where: { email: credentials?.email }
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(
          credentials?.password,
          user.hashedPassword
        )

        if (!isValid) { 
          throw new Error("Invalid password");
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_URL,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}