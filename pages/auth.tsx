import React from "react";
import logo from "../public/images/logo.png";
const Auth: React.FunctionComponent = () => {
  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-right">
      <div className=" bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-8">
          <img src={logo.src} alt="Logo" className="h-12" />
        </nav>
        <section className="flex justify-center">
          <div
            className=" bg-black bg-opacity-80 rounded-md
          lg:w-2/5 lg:max-w-md px-12 py-8 select-none flex flex-col gap-6"
          >
            <h3 className="font-bold text-4xl">Sign In</h3>
            <input
              type="text"
              className="bg-zinc-700 rounded-md px-4 py-2 text-sm"
              placeholder="Email"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Auth;
