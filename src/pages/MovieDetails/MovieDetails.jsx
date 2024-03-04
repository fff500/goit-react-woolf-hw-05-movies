import React, { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams } from "react-router-dom";

import { getMovie } from "api/themoviedb-api";
import { BASE_API_URL } from 'constants/constants';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async (movieId) => {
      try {
        const { data: { original_title, title, popularity, overview, genres, poster_path, release_date } } = await getMovie(movieId);

        setMovieDetails({
          title: title || original_title,
          popularity,
          overview,
          genres,
          posterSrc: `${BASE_API_URL}${poster_path}`,
          releasYear: release_date.substring(0, 4),
        });
      } catch (error) {
        alert(error.message);
      }
    }

    fetchMovie(movieId);

  }, [movieId])

  const { title, popularity, overview, genres, posterSrc, releasYear } = movieDetails;

  console.log(movieDetails);

  return (
    <>
      <div>
        <button>Go back</button>
        <div>
          <div>
            <img src={posterSrc} alt={`${title} poster`} />
          </div>
          <div>
            <h1>{`${title} (${releasYear})`}</h1>
            <p>User score: {popularity}</p>
            <div>
              <h2>Overview</h2>
              <p>{overview}</p>
            </div>
            <div>
              <h3>Genres</h3>
              <ul>
                {genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MovieDetails