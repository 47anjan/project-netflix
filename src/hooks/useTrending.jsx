import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../constants";
const useTrending = () => {
  const [movies, setMovies] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get(
        ` https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
      );

      const { results } = result?.data;

      setMovies(results);
    } catch (error) {
      console.log(reeor.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return movies;
};

export default useTrending;
