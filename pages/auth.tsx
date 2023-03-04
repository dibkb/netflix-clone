import Input from "@/components/Input";
import React, { useCallback, useState } from "react";
import logo from "../public/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Auth: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [variant, setVariant] = useState<"register" | "login">("register");
  const switchVariant = useCallback(() => {
    setVariant((prev) => (prev === "register" ? "login" : "register"));
  }, []);
  return (
    <div className="relative w-full h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/32935458-d049-44c2-b94b-32f16d60ded1/IN-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-no-repeat bg-cover bg-center">
      <div className=" bg-black w-full h-full lg:bg-opacity-60">
        <nav className="px-12 py-8 select-none">
          <img src={logo.src} alt="Logo" className="h-12" />
        </nav>
        <section className="flex justify-center">
          <div
            className=" bg-black bg-opacity-80 rounded-lg
          lg:w-3/5 lg:max-w-lg md:max-w-xl sm:max-w-xl w-full px-12 py-16 select-none flex flex-col gap-6"
          >
            <h3 className="font-bold text-4xl mb-4">
              {variant === "register" ? "Register" : "Sign In"}
            </h3>
            {variant === "register" && (
              <Input
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
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
            <button className="bg-red-700 rounded-md py-3 hover:bg-red-800 mt-3 text-base mb-6">
              {variant === "register" ? "Sign Up" : "Login"}
            </button>
            {/* Oauth buttons */}
            <button className="text-sm py-3 bg-white rounded-md flex justify-center gap-3 items-center hover:bg-slate-100">
              <FcGoogle className="" size="1.5rem" />
              <p className="text-zinc-900">
                {variant === "register" ? "Register" : "Sign in"} with Google
              </p>
            </button>
            <button className="text-sm py-3 bg-white rounded-md flex justify-center gap-3 items-center hover:bg-slate-100">
              <FaGithub className="text-zinc-900" size="1.5rem" />
              <p className="text-zinc-900">
                {variant === "register" ? "Register" : "Sign in"} with Gitbub
              </p>
            </button>
            <span className="flex items-center gap-2 text-sm">
              <p className=" text-zinc-500">
                {variant === "login" ? "New to Netflix?" : "Already a member?"}
              </p>
              <p
                className="cursor-pointer hover:underline"
                onClick={switchVariant}
              >
                {variant === "login" ? "Register here" : "Login here"}
              </p>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Auth;
