import { useContext } from "react";
import { IMG_PATH_300 } from "../constants";
import { Star, XCircle } from "react-feather";
import ListContext from "../context/listContext";

const ListItem = ({ movie }) => {
  const { list, setList } = useContext(ListContext);

  const handleRemove = (id) => {
    const arr = [...list];
    const movies = arr.filter((item) => item.id !== id);
    setList(movies);
  };

  return (
    <>
      <article className="flex flex-col sm:flex-row  border-b mb-3 pb-3  items-center">
        <div className="mr-auto w-full">
          <div className="flex gap-2 items-center flex-col sm:flex-row ">
            {movie?.backdrop_path ? (
              <img
                className="w-full sm:max-w-[140px]  rounded-sm"
                src={`${IMG_PATH_300}${movie?.backdrop_path}`}
                alt=""
              />
            ) : (
              <div className="w-[140px] h-[90px] bg-slate-100"></div>
            )}
            <h1 className="line-clamp-1 font-medium text-[rgba(0,0,0,.87)] text-sm md:text-base">
              {movie?.title ? movie?.title : movie?.name}
              {movie?.release_date
                ? `(${movie?.release_date?.slice(0, 4)})`
                : ""}
            </h1>
          </div>
        </div>

        <div className="flex items-center  gap-2 sm:gap-4 justify-center">
          <div className="flex items-center gap-2 text-sm md:text-base ">
            <Star className="mb[2px]" color="#EFCB74" fill="#EFCB74" />
            {+movie?.vote_average?.toFixed(1)}
          </div>
          <XCircle
            className="cursor-pointer"
            onClick={() => handleRemove(movie?.id)}
          />
        </div>
      </article>
    </>
  );
};

export default ListItem;
