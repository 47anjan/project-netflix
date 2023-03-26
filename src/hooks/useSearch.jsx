import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../constants";
const useSearch = (search) => {
  const [movies, setMovies] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/search/${search?.type}?api_key=${API_KEY}&language=en-US&page=1&query=${search?.value}`
      );

      const { results } = result?.data;

      setMovies(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return movies;
};

export default useSearch;
