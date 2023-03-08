import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from "../../libs/prismadb";
import serverAuth from "@/libs/serverAuth";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // //   --------------- POST------------------------
    if (req.method === "POST") {
      const { movieId } = req.body;
      if (!movieId) {
        console.log(movieId);
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

      const { movieId } = req.body;

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Invalid ID");
      }

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

    return res.status(405).end();
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
}
