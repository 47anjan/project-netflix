import React, { useState } from "react";
import { Info, Play } from "react-feather";
import useRandom from "../hooks/useRandom";

const Hero = () => {
  const data = useRandom();
  console.log(data);

  const url = ` https://image.tmdb.org/t/p/original/${data?.backdrop_path}`;
  const bg = {
    background: ` url(${url}) no-repeat center / cover`,
  };

  return (
    <>
      {data ? (
        <section
          style={bg}
          className="min-h-[90vh] relative layer flex items-center pt-12 pb-4"
        >
          <div className="container mx-auto p-4 relative text-white z-10 hero">
            <div>
              <h1 className="font-bold text-3xl md:text-5xl mb-8">
                {data?.name}
              </h1>
              <div className="my-5 flex items-center gap-4">
                <button className="flex items-center gap-2 font-semibold text-black bg-white py-2 px-4 rounded-md">
                  <Play color="black" fill="black" /> Play Episode
                </button>
                <button className="flex items-center gap-2 font-semibold  bg-gray-400 py-2 px-4 rounded-md">
                  <Info /> More info
                </button>
              </div>
              <p className="line-clamp max-w-[55ch] font-normal text-base md:text-lg">
                {data?.overview}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <span>Loading</span>
      )}
    </>
  );
};

export default Hero;
