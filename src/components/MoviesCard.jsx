import React from "react";
import { IMG_PATH } from "../constants";

const MoviesCard = ({ movie }) => {
  return (
    <article className="h-[150px] w-[280px] md:w-[320px] md:h-[180px] rounded-md overflow-hidden cursor-pointer">
      <img src={IMG_PATH + movie?.backdrop_path} alt={movie?.original_title} />
    </article>
  );
};

export default MoviesCard;
