import { useState, useEffect } from "react";
import axios from "axios";

const useRandom = () => {
  const [movie, setMovie] = useState(null);
  const getData = async () => {
    const result = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=f043ea02e3806fc663233f74b0323c9a&language=en-US&page=1"
    );

    const { results } = result.data;

    const index = Math.floor(Math.random() * results.length);

    setMovie(results[index]);
  };

  useEffect(() => {
    getData();
  }, []);

  return movie;
};

export default useRandom;
