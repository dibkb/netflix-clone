import { NextApiResponse, NextApiRequest } from "next";
import prismadb from "../../libs/prismadb";
import serverAuth from "@/libs/serverAuth";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).end();
  }
  try {
    await serverAuth(req);
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    res.status(200).json(randomMovie[0]);
  } catch (error) {
    res.status(400).json((error as Error).message);
  }
}
