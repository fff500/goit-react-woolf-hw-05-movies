import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { getMovie } from "api/themoviedb-api";

const Movie = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async (movieId) => {
      try {
        const { data } = await getMovie(movieId);

        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    }

    fetchMovie(movieId);

  }, [movieId])


  return (
    <div>Movie</div>
  )
}

export default Movie