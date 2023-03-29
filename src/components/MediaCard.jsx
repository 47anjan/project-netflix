import React from "react";
import { Bookmark, Star } from "react-feather";
import { Link } from "react-router-dom";
import { IMG_PATH_300 } from "../constants";
import { useContext } from "react";
import ListContext from "../context/listContext";

const MediaCard = ({ movie, to, state, isActive }) => {
  const { list, setList } = useContext(ListContext);

  const handleAdd = (item) => {
    if (list.includes(item)) {
      return;
    } else {
      setList([...list, item]);
    }
  };

  return (
    <article className="flex flex-col sm:flex-row  cursor-pointer border-b mb-3 pb-3  items-center">
      <Link state={state} to={to} className="mr-auto w-full">
        <div className="flex gap-2 items-center flex-col sm:flex-row ">
          {movie?.backdrop_path ? (
            <img
              className="w-full sm:max-w-[140px]  rounded-sm"
              src={`${IMG_PATH_300}${movie?.backdrop_path}`}
              alt=""
            />
          ) : (
            <div className="w-[140px] h-[90px] bg-slate-100"></div>
          )}
          <h1 className="line-clamp-1 font-medium text-[rgba(0,0,0,.87)] text-sm md:text-base">
            {movie?.title ? movie?.title : movie?.name}
            {movie?.release_date ? `(${movie?.release_date?.slice(0, 4)})` : ""}
          </h1>
        </div>
      </Link>

      <div className="flex items-center  gap-2 sm:gap-4 justify-center">
        <div className="flex items-center gap-2 text-sm md:text-base ">
          <Star className="mb[2px]" color="#EFCB74" fill="#EFCB74" />
          {+movie?.vote_average?.toFixed(1)}
        </div>

        <Bookmark
          fill={`${isActive ? "#EFCB74" : "none"}`}
          onClick={() => handleAdd(movie)}
        />
      </div>
    </article>
  );
};

export default MediaCard;
