import React from "react";
import MovieContainer from "./MovieContainer";
import Trending from "./Trending";

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Trending />
      <MovieContainer
        title={"Upcoming Movies"}
        mediaType="movie"
        catagory="upcoming"
      />

      <MovieContainer
        title={"Popular Movies"}
        mediaType="movie"
        catagory="popular"
      />
      <MovieContainer
        title={"Top Rated Movies"}
        mediaType="movie"
        catagory="top_rated"
      />
      <MovieContainer
        title={"Top Rated TV Series"}
        mediaType="tv"
        catagory="top_rated"
      />
      <MovieContainer
        title={"Popular TV Series"}
        mediaType="tv"
        catagory="popular"
      />
    </div>
  );
};

export default Features;
