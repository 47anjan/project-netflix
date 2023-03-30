import { useLocation } from "react-router-dom";
import { IMG_PATH_500 } from "../constants";
import useDeatils from "../hooks/useDeatils";
import { Bookmark, Star } from "react-feather";
import useSimilar from "../hooks/useSimilar";

import { Swiper, SwiperSlide } from "swiper/react";
import MoviesCard from "../components/MoviesCard";
import "swiper/css";
import { ShimmerRow } from "../components/ShimmerEffect";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ListContext from "../context/listContext";

const Details = () => {
  const { state: media } = useLocation();
  const movie = useDeatils(media);

  const similar = useSimilar(movie?.id);

  const { list, setList } = useContext(ListContext);

  const [isInList, setIsInList] = useState(false);

  useEffect(() => {
    for (let i in list) {
      if (list[i].id === movie?.id) setIsInList(true);
    }
  }, [movie]);

  const handleAdd = (item) => {
    setIsInList(true);
    for (let i in list) {
      if (list[i].id === item.id) return;
    }
    setList([...list, item]);
  };

  let format = (n) => `${(n / 60) ^ 0}h ` + `${n % 60}min`;

  return (
    <div className="container mx-auto p-4 pt-16 ">
      {movie ? (
        <section className="flex pt-2 flex-col md:flex-row gap-4">
          <div className="flex-1 flex justify-center">
            <img
              className="w-full md:w-[360px] rounded-lg"
              src={
                movie?.poster_path
                  ? `${IMG_PATH_500}${movie?.poster_path}`
                  : `${IMG_PATH_500}${movie?.backdrop_path}`
              }
              alt={`${movie?.name ? movie?.name : movie?.title}`}
            />
          </div>
          <div className="flex-1 py-8">
            <div className="flex justify-between">
              <h1 className="text-2xl sm:text-4xl font-bold">
                {movie?.name ? movie?.name : movie?.title}
              </h1>
              <div className="flex items-center gap-2 text-2xl font-bold">
                {+movie?.vote_average?.toFixed(1)}
                <Star className="mb[2px]" color="#EFCB74" fill="#EFCB74" />
              </div>
            </div>
            <div className="pt-2 pb-8">
              <span>
                {movie?.first_air_date
                  ? `${movie?.first_air_date?.slice(0, 4)}`
                  : `${movie?.release_date?.slice(0, 4)}`}
              </span>
              <span className="border-x-2 mx-2 px-2 border-gray-800">
                {movie?.runtime
                  ? format(Number(movie?.runtime))
                  : `${movie?.episode_run_time} min`}
              </span>
              <span>{movie?.adult ? "18+" : "12+"}</span>
            </div>
            <div>
              <p className="pb-6 max-w-[60ch]">{movie?.overview}</p>
              <div className="flex flex-col gap-2">
                <div className="font-semibold">
                  <span className="text-slate-700">Original Language: </span>
                  <span className="uppercase">{movie?.original_language}</span>
                </div>

                <div className="font-semibold ">
                  <span className="text-slate-700">Release Date: </span>
                  <span>
                    <span>
                      {movie?.first_air_date
                        ? `${movie?.first_air_date}`
                        : `${movie?.release_date}`}
                    </span>
                  </span>
                </div>

                <div className="font-semibold">
                  <span className="text-slate-700">Genres: </span>
                  <span>
                    {movie?.genres.map((item) => `${item.name} `).join(", ")}
                  </span>
                </div>
              </div>

              {movie?.number_of_episodes ? (
                <div className="flex flex-col ">
                  <div>
                    <div className="font-semibold my-2">
                      <span className="text-slate-700">
                        Number of Epesodes:{" "}
                      </span>
                      <span>{movie?.number_of_episodes}</span>
                    </div>
                    <div className="font-semibold">
                      <span className="text-slate-700 my-2">
                        Number of Seasons:{" "}
                      </span>
                      <span>{movie?.number_of_seasons}</span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {movie?.budget ? (
                <div className="font-semibold my-2">
                  <span className="text-slate-700">Budget: </span>
                  <span>
                    {(+movie?.budget / 1000000)?.toFixed(1)} million USD
                  </span>
                </div>
              ) : (
                ""
              )}

              {movie?.revenue ? (
                <div className="font-semibold my-2">
                  <span className="text-slate-700">Box office: </span>
                  <span>
                    {(+movie?.revenue / 1000000)?.toFixed(1) > 1000
                      ? `${(+movie?.revenue / 1000000000)?.toFixed(
                          1
                        )} billion USD`
                      : `${(+movie?.revenue / 1000000)?.toFixed(
                          1
                        )} million USD`}
                  </span>
                </div>
              ) : (
                ""
              )}

              <button
                onClick={() => handleAdd(movie)}
                className="flex items-center gap-2 font-semibold text-black bg-slate-400 py-2 px-4 rounded-md mt-8"
              >
                <Bookmark color="white" fill="white" />{" "}
                {isInList ? "Listed" : "Add To List"}
              </button>
            </div>
          </div>
        </section>
      ) : (
        <h1>Loading</h1>
      )}

      <section>
        <h1 className="font-semibold text-xl md:text-2xl my-4 capitalize mt-6">
          More
        </h1>
        {similar ? (
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
              {similar?.map((movie) => (
                <SwiperSlide key={movie?.id}>
                  <Link
                    state={{ type: "movie", id: movie?.id }}
                    to={`/details`}
                  >
                    <MoviesCard movie={movie} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <h1>
            <ShimmerRow height={"150px"} />
          </h1>
        )}
      </section>
    </div>
  );
};

export default Details;
