import NextAuth from "next-auth";
import { compare } from "bcrypt";
import prismadb from "../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
export const authOptions = {
  //   adapter: PrismaAdapter(prismadb),
  providers: [
    Credentials({
      id: "Credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Email and Password required");
        }
        const user = await prismadb.user.findUnique({
          where: {
            email,
          },
        });
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const isCorrectPassword = await compare(
            password,
            user.hashedPassword
          );
          if (!isCorrectPassword) {
            throw new Error("Password does not match");
          }
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error("Email does not exist");
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
