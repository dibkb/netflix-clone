import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from "../../libs/prismadb";
import serverAuth from "@/libs/serverAuth";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { movieId } = req.body;
    if (!movieId) {
      res.status(404).json("No Movie ID provided");
    }
    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!existingMovie) {
      res.status(404).json("Invalid ID");
    }
    //   --------------- POST------------------------
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req);
      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });
      res.status(200).json(user);
    }
    //   ----------------DELETE----------------------
    if (req.method === "DELETE") {
      const { currentUser } = await serverAuth(req);
      const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);
      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        },
      });
      return res.status(200).json(updatedUser);
    }
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
}
