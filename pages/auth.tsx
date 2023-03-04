import Input from "@/components/Input";
import React, { useState } from "react";
import logo from "../public/images/logo.png";
const Auth: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-right">
      <div className=" bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-8">
          <img src={logo.src} alt="Logo" className="h-12" />
        </nav>
        <section className="flex justify-center">
          <div
            className=" bg-black bg-opacity-80 rounded-md
          lg:w-2/5 lg:max-w-md px-12 py-16 select-none flex flex-col gap-6"
          >
            <h3 className="font-bold text-4xl mb-4">Sign In</h3>
            <Input
              id="email"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-red-700 rounded-md py-3 hover:bg-red-800 mt-6">
              Login
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Auth;
