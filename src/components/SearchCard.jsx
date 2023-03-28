import React from "react";
import { IMG_PATH_180 } from "../constants";
const SearchCard = ({ movie }) => {
  return (
    <article className="flex items-end cursor-pointer border-b mb-2 pb-2">
      <div>
        {movie?.backdrop_path ? (
          <img
            className="max-w-[140px]"
            src={`${IMG_PATH_180}${movie?.backdrop_path}`}
            alt=""
          />
        ) : (
          <div className="w-[140px] h-[90px] bg-slate-100"></div>
        )}
      </div>
      <div className="p-2">
        <h1 className="text-base font-medium line-clamp-1 text-[rgba(0,0,0,.87)]">
          {movie?.title ? movie?.title : movie?.name}
        </h1>
        <div className="text-sm text-[rgba(0,0,0,.54)]">
          <p>{movie?.release_date?.slice(0, 4)}</p>
          <p>{+movie?.vote_average?.toFixed(1)}</p>
        </div>
      </div>
    </article>
  );
};

export default SearchCard;
