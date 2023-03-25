import React from "react";
import { IMG_PATH } from "../constants";
const TrendingCard = ({ movie }) => {
  return (
    <article className="h-[250px] w-[180px] rounded-md overflow-hidden cursor-pointer">
      <img src={IMG_PATH + movie?.poster_path} alt="" />
    </article>
  );
};

export default TrendingCard;
