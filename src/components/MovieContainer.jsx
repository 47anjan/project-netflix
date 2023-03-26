import React from "react";
import useMovies from "../hooks/useMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import MoviesCard from "./MoviesCard";
import "swiper/css";

const MovieContainer = ({ title, mediaType, catagory }) => {
  const movies = useMovies(mediaType, "1", catagory);

  return (
    <section>
      <h1 className="font-semibold text-xl md:text-2xl my-4 capitalize mt-6">
        {title}
      </h1>
      {movies ? (
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            className="justify-center"
            breakpoints={{
              375: {
                width: 576,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1024: {
                width: 1024,
                slidesPerView: 3,
              },
            }}
          >
            {movies?.map((movie) => (
              <SwiperSlide key={movie?.id}>
                <MoviesCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};

export default MovieContainer;
