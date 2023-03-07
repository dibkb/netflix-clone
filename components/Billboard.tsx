import { useBillboard } from "@/hooks/useBillboard";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
export const Billboard = () => {
  const { data } = useBillboard();
  return (
    <div className="z-1 relative h-[56.25vw]">
      <video
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
      ></video>
      <section className="absolute top-[40%] px-4 md:px-16 py-8 w-[50]">
        <h4 className="text-1xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h4>
        <p className="text-gray-300 text-normal text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%]">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          {/* <PlayButton movieId={data?.id} /> */}
          <button
            // onClick={handleOpenModal}
            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          >
            <AiOutlineInfoCircle className="w-4 md:w-7 mr-1" />
            More Info
          </button>
        </div>
      </section>
    </div>
  );
};
