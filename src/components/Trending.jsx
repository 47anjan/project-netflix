import React from "react";
import useTrending from "../hooks/useTrending";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingCard from "./TrendingCard";
import "swiper/css";
const Trending = () => {
  const data = useTrending();

  return (
    <>
      <h1 className="font-semibold text-xl md:text-2xl my-4">Trending</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          500: {
            width: 576,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <TrendingCard movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Trending;
