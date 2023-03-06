import Input from "@/components/Input";
import React, { useCallback, useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import axios from "axios";
import logo from "../public/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
// --------------------- ServerSide--------------------
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
const Auth: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [variant, setVariant] = useState<"register" | "login">("register");
  const switchVariant = useCallback(() => {
    setVariant((prev) => (prev === "register" ? "login" : "register"));
  }, []);
  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/home",
      });
      router.push("/profiles");
    } catch (error) {
      console.error(error);
    }
  }, [email, password, router]);
  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        name,
        email,
        password,
      });
      login();
    } catch (error) {
      console.error(error);
    }
  }, [name, email, password, login]);
  return (
    <div className="relative w-full h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/32935458-d049-44c2-b94b-32f16d60ded1/IN-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-no-repeat bg-cover bg-center">
      <div className=" bg-black w-full h-full lg:bg-opacity-60">
        <nav className="px-12 py-8 select-none">
          <img src={logo.src} alt="Logo" className="h-12" />
        </nav>
        <section className="flex justify-center">
          <div
            className=" bg-black bg-opacity-80 rounded-lg
          lg:w-4/5 lg:max-w-xl md:max-w-xl sm:max-w-xl w-full px-16 py-16 select-none flex flex-col gap-6"
          >
            <h3 className="font-bold text-4xl mb-4">
              {variant === "register" ? "Register" : "Sign In"}
            </h3>
            {variant === "register" && (
              <Input
                id="name"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
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
            <button
              onClick={variant === "register" ? register : login}
              className="bg-red-700 rounded-md py-3 hover:bg-red-800 mt-3 text-base mb-6"
            >
              {variant === "register" ? "Sign Up" : "Login"}
            </button>
            {/* Oauth buttons */}
            <button
              onClick={() => signIn("google", { callbackUrl: "/home" })}
              className="text-sm py-3 bg-white rounded-md flex justify-center gap-3 items-center hover:bg-slate-100"
            >
              <FcGoogle className="" size="1.5rem" />
              <p className="text-zinc-900">
                {variant === "register" ? "Register" : "Sign in"} with Google
              </p>
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: "/home" })}
              className="text-sm py-3 bg-white rounded-md flex justify-center gap-3 items-center hover:bg-slate-100"
            >
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
