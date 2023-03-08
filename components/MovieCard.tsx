import React from "react";
import { GoPlay } from "react-icons/go";
import { BookmarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import logo from "../public/images/logo_2.png";
interface MovieCard {
  id: string;
  thumbnailUrl: string;
  title: string;
  duration: string;
}
const MovieCard: React.FC<MovieCard> = ({
  id,
  thumbnailUrl,
  title,
  duration,
}) => {
  return (
    <main key={id} className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={thumbnailUrl}
        alt={title}
        className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-md
            group-hover:opacity-90
            sm:group-hover:opacity-0
            delay-100
            w-full
            h-[12vw]"
      />
      <img
        src={logo.src}
        alt=""
        delay-100
        object-cover
        className="transition
        duration absolute group-hover:opacity-0 h-12 object-cover top-3 left-2"
      />
      <div
        className="opacity-0
          absolute
          top-0
          transition
          duration-200
          z-10
          invisible
          sm:visible
          delay-100
          scale-0
          group-hover:scale-110
          group-hover:translate-y-[-6vw]
          group-hover:translate-x-[2vw]
          group-hover:opacity-100
      "
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full shadow-md rounded-b-md flex flex-col gap-y-2">
          <div className="flex items-center w-full">
            <span className="flex gap-3 items-center">
              <PlayCircleIcon className="h-6 w-6 md:h-10 md:w-10 cursor-pointer hover:text-gray-200" />
              <BookmarkIcon className="h-6 w-6 md:h-8 md:w-8 cursor-pointer hover:text-gray-200" />
            </span>
            <ChevronDownIcon className="h-6 w-6 md:h-8 md:w-8 ml-auto cursor-pointer hover:text-gray-200" />
          </div>
          <p className="text-xl">{title}</p>
          <span className="flex gap-2">
            <p className="text-green-400">New</p>
            2023
          </span>
          <p>{duration}</p>
        </div>
      </div>
    </main>
  );
};

export default MovieCard;
