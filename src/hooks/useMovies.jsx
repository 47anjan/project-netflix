import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../constants";

const useMovies = (type, page, catagory) => {
  const [movies, setMovies] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/${type}/${catagory}?api_key=${API_KEY}&language=en-US&page=${page}`
      );

      const { results } = result?.data;

      setMovies(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [page, catagory]);

  return movies;
};

export default useMovies;
