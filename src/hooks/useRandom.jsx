import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../constants";
const useRandom = () => {
  const [movie, setMovie] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const { results } = result.data;

      const index = Math.floor(Math.random() * results.length);

      setMovie(results[index]);
    } catch (error) {
      console.log(reeor.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return movie;
};

export default useRandom;
