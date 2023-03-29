import { useEffect, useState } from "react";
import { API_KEY } from "../constants";
import axios from "axios";
const useDeatils = (media) => {
  const [movie, setMovie] = useState(null);
  const getData = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/${media?.type}/${media?.id}?api_key=${API_KEY}&language=en-US`
      );

      const results = result?.data;
      setMovie(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [media?.type, media?.id]);

  return movie;
};

export default useDeatils;
