import NextAuth from "next-auth";
import { compare } from "bcrypt";
import prismadb from "../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "passord",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and Password required");
        }
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const isCorrectPassword = await compare(
            credentials.password,
            user.hashedPassword as string
          );
          if (!isCorrectPassword) {
            throw new Error("Password does not match");
          }
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error("User does not exist");
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prismadb),
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
