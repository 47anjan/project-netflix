import React, { useState } from "react";
import useTrending from "../hooks/useTrending";
import { ShimmerRow } from "../components/ShimmerEffect";
import MediaCard from "../components/MediaCard";
import useScrollTop from "../hooks/useScrollTop";
import { Link } from "react-router-dom";

const Trending = () => {
  const [page, setPage] = useState(1);

  useScrollTop();
  const movies = useTrending(page);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 pt-16 ">
      <section className=" min-h-[75vh] border rounded-md p-4 mt-4 flex flex-col ">
        {movies ? (
          movies?.map((movie) => (
            <MediaCard
              key={movie?.id}
              state={{ type: movie?.media_type, id: movie?.id }}
              to={`/details`}
              movie={movie}
            />
          ))
        ) : (
          <div className="">
            <div className="flex flex-col gap-2">
              {Array(10)
                .fill("")
                .map((_, i) => (
                  <ShimmerRow key={i} height={"150px"} />
                ))}
            </div>
          </div>
        )}
      </section>
      <section className=" w-fit flex items-start gap-2 justify-center mx-auto flex-wrap py-4">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              onClick={() => handlePageChange(index + 1)}
              key={index}
              className={` ${
                page === index + 1 ? "bg-slate-400" : ""
              } py-1 cursor-pointer px-4 border rounded-md text-[#222]`}
            >
              {index + 1}
            </div>
          ))}
      </section>
    </div>
  );
};

export default Trending;
