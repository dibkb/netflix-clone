import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "../../libs/prismadb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
  }
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      res.status(400).json("Email is already registered");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prismadb.user.create({
      data: {
        email,
        username,
        hashedPassword,
        emailVerified: new Date(),
      },
    });
    res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json((e as Error).message);
  }
}
