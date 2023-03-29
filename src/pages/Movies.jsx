import React, { useState, useContext } from "react";
import useMovies from "../hooks/useMovies";
import { ShimmerRow } from "../components/ShimmerEffect";
import MediaCard from "../components/MediaCard";
import useScrollTop from "../hooks/useScrollTop";
import ListContext from "../context/listContext";

export const Movies = () => {
  const [page, setPage] = useState(1);
  const { list } = useContext(ListContext);

  const [catagory, setCatagory] = useState("popular");

  useScrollTop();
  const movies = useMovies("movie", page, catagory);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleCatagory = (catagory) => {
    setCatagory(catagory);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 pt-16 ">
      <div>
        <div className="flex gap-4 items-center justify-end">
          <button
            onClick={() => handleCatagory("popular")}
            className={`border rounded-md px-2 ${
              catagory == "popular" ? "bg-slate-300" : ""
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => handleCatagory("top_rated")}
            className={`border rounded-md px-2 ${
              catagory == "top_rated" ? "bg-slate-300" : ""
            }`}
          >
            Top Rated
          </button>
        </div>
      </div>
      <section className=" min-h-[75vh] border rounded-md p-4 mt-4 flex flex-col ">
        {movies ? (
          movies?.map((movie) => (
            <MediaCard
              key={movie?.id}
              state={{ type: "movie", id: movie?.id }}
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
