import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req);
    res.status(200).json(currentUser);
  } catch (e) {
    res.status(400).json((e as Error).message);
  }
}
