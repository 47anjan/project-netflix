import React from "react";
import { useLocation } from "react-router-dom";
import { IMG_PATH_500 } from "../constants";
import useDeatils from "../hooks/useDeatils";
import { Star } from "react-feather";
const Details = () => {
  const { state: media } = useLocation();

  const movie = useDeatils(media);
  console.log(movie);

  let format = (n) => `${(n / 60) ^ 0}h ` + `${n % 60}min`;

  return (
    <div className="container mx-auto p-4 pt-16 ">
      <section className="flex pt-2 flex-col md:flex-row gap-4">
        <div className="flex-1 flex justify-center">
          <img
            className="w-full md:w-[360px] rounded-lg"
            src={`${IMG_PATH_500}${movie?.poster_path}`}
            alt={`${movie?.name ? movie?.name : movie?.original_title}`}
          />
        </div>
        <div className="flex-1 py-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">
              {movie?.name ? movie?.name : movie?.original_title}
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
                    <span className="text-slate-700">Number of Epesodes: </span>
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
                <span>{(+movie?.budget / 1000000).toFixed(1)} million USD</span>
              </div>
            ) : (
              ""
            )}

            {movie?.revenue ? (
              <div className="font-semibold my-2">
                <span className="text-slate-700">Box office: </span>
                <span>
                  {(+movie?.revenue / 1000000).toFixed(1) > 1000
                    ? `${(+movie?.revenue / 1000000000).toFixed(1)} billion USD`
                    : `${(+movie?.revenue / 1000000).toFixed(1)} million USD`}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
