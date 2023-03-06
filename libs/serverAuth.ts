import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from "./prismadb";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });
  if (!session?.user?.email) {
    throw new Error("Not signed In");
  }
  const curretUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!curretUser) {
    throw new Error("Not signed In");
  }
  return { curretUser };
};
export default serverAuth;
