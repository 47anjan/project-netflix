import axios from "axios";
import { useEffect, useState } from "react";

const useSimilar = (id) => {
  const [movies, setMovies] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=f043ea02e3806fc663233f74b0323c9a&language=en-US&page=1`
      );

      const { results } = result?.data;

      setMovies(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return movies;
};

export default useSimilar;
