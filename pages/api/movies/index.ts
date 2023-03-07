import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
import prismadb from "../../../libs/prismadb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(403).end();
  }
  try {
    await serverAuth(req);
    const movies = await prismadb.movie.findMany();
    res.status(200).json(movies);
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
}
