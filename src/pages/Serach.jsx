import React, { useState, useEffect } from "react";
import useScrollTop from "../hooks/useScrollTop";
import { Link, useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import SearchCard from "../components/SearchCard";
import { ShimmerRow } from "../components/ShimmerEffect";

const Serach = () => {
  useScrollTop();

  const { value } = useParams();

  const [type, setType] = useState("movie");

  const [search, setSerach] = useState({
    value,
    type: "movie",
  });

  useEffect(() => {
    setSerach({
      value,
      type: "movie",
    });
  }, [value]);

  let movies = useSearch(search);

  const handleTv = () => {
    setSerach({
      value,
      type: "tv",
    });
    setType("tv");
  };
  const handleMovie = () => {
    setSerach({
      value,
      type: "movie",
    });
    setType("movie");
  };

  const SearchHeader = ({ value }) => {
    return (
      <section className="bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl ">{value}</h1>
          <div className="flex gap-4 items-center">
            <button
              onClick={handleMovie}
              className={`border rounded-md px-2 ${
                search.type == "movie" ? "bg-slate-300" : ""
              }`}
            >
              Movies
            </button>
            <button
              className={`border rounded-md px-2 ${
                search.type == "tv" ? "bg-slate-300" : ""
              }`}
              onClick={handleTv}
            >
              TvShows
            </button>
          </div>
        </div>
      </section>
    );
  };

  if (movies?.length === 0) {
    return (
      <section className="bg-white">
        <div className="max-w-screen-lg mx-auto p-4  pt-16">
          <SearchHeader value={"No Search Found!"} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="max-w-screen-lg mx-auto p-4  pt-16">
        <SearchHeader value={`Search "${value}"`} />
        <div className="border rounded-md p-4 mt-4">
          {movies ? (
            movies?.map((movie) => (
              <Link
                state={{ type, id: movie?.id }}
                to="/details"
                key={movie?.id}
              >
                <SearchCard movie={movie} />
              </Link>
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
        </div>
      </div>
    </section>
  );
};

export default Serach;
