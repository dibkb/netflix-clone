import React from "react";
import { GoPlay } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
interface MovieCard {
  id: string;
  thumbnailUrl: string;
  title: string;
}
const MovieCard: React.FC<MovieCard> = ({ id, thumbnailUrl, title }) => {
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
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full shadow-md rounded-b-md">
          <span className="flex gap-3">
            <GoPlay size={45} className="cursor-pointer hover:text-gray-200" />
            <MdOutlineFavoriteBorder
              size={45}
              className="cursor-pointer font-thin hover:text-gray-200"
            />
          </span>
        </div>
      </div>
    </main>
  );
};

export default MovieCard;
