import React, { useState, useEffect } from 'react';

import { MovieLink } from 'components/MovieLink/MovieLink';
import { getTrendingMovies } from 'api/themoviedb-api';
import { DEFAULT_ERROR_MESSAGE } from 'constants/constants';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoadTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const { data: { results } } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        alert(error.message || DEFAULT_ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    }

    handleLoadTrendingMovies();
  }, [])

  return (
    <>
      <h1>Tranding Today</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ul>
          {trendingMovies.map(({ id, title, name, original_name }) => (
            <MovieLink
              key={id}
              to={`/movies/${id}`}
              text={title || name || original_name}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default Home;
