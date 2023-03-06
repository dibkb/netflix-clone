import { useCurrentUser } from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import logo from "../public/images/logo.png";
import { users } from "@/utlis/usernames";
export async function getServerSideProps(conetxt: NextPageContext) {
  const session = await getSession(conetxt);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
const App: React.FC = () => {
  const { data: user } = useCurrentUser();
  console.log(user);
  return (
    <div className="select-none flex flex-col mx-auto w-full py-32">
      <img src={logo.src} alt="Logo" className="md:h-16 h-10 w-min mx-auto" />
      <h1 className="text-4xl md:text-6xl text-center mt-12">
        Who&apos;s watching?
      </h1>
      <div className="flex justify-between mt-12 mx-auto w-fit flex-wrap gap-y-8">
        {users.map((account, i) => {
          return (
            <span
              key={i}
              className="group basis-1/2 md:basis-1/4 px-6 hover:cursor-pointer"
            >
              <img
                src={account.thubmnail}
                alt=""
                className="h-32 mb-2 mx-auto border border-transparent group-hover:border-white"
              />
              <p className="text-zinc-500 text-center group-hover:text-white">
                {account.name || user?.name}
              </p>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default App;
