import React from "react";
import useTrending from "../hooks/useTrending";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingCard from "./TrendingCard";
import { Link } from "react-router-dom";
import "swiper/css";

import { ShimmerRow } from "./ShimmerEffect";
const Trending = () => {
  const data = useTrending();

  return (
    <>
      <h1 className="font-semibold text-xl md:text-2xl my-4">Trending</h1>
      {data ? (
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
              <Link
                state={{ type: item?.media_type, id: item?.id }}
                to={`/details`}
              >
                <TrendingCard movie={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>
          <ShimmerRow height={"250px"} />
        </div>
      )}
    </>
  );
};

export default Trending;
