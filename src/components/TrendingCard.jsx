import React from "react";
import { IMG_PATH } from "../constants";
import { Star } from "react-feather";

const TrendingCard = ({ movie }) => {
  return (
    <article className="h-[250px] w-[180px] rounded-md overflow-hidden cursor-pointer relative overlay card">
      <img src={IMG_PATH + movie?.poster_path} alt="" />
      <div className="absolute z-10 bottom-0 p-2 info">
        <h2 className="text-sm mb-2 font-medium leading-4">
          {movie?.title ? movie?.title : movie?.name}
        </h2>
        <p className="line-clamp-2 text-xs leading-4 mb-1">{movie?.overview}</p>
        <span className="rating flex w-fit items-center gap-1 ">
          <span>
            <Star
              width={14}
              color="#ffd600"
              fill="#ffd600"
              className="mb-[2px]"
            />
          </span>
          {+movie?.vote_average.toFixed(1)}
        </span>
      </div>
    </article>
  );
};

export default TrendingCard;
