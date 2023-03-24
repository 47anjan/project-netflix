import React from "react";
import { Info, Play } from "react-feather";

const Hero = () => {
  const url =
    "https://image.tmdb.org/t/p/w1280/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg";
  const bg = {
    background: ` url(${url}) no-repeat center / cover`,
  };

  return (
    <section style={bg} className="min-h-[85vh] layer flex items-center py-10">
      <div className="container mx-auto p-4 relative text-white z-10 ">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl mb-8">
            The Mandalorian
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
            After the fall of the Galactic Empire, lawlessness has spread
            throughout the galaxy. A lone gunfighter makes his way through the
            outer reaches, earning his keep as a bounty
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
