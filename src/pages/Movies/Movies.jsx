import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MovieLink } from 'components/MovieLink/MovieLink';
import { getMoviesByKeyWord } from 'api/themoviedb-api';
import { DEFAULT_ERROR_MESSAGE } from 'constants/constants';

import style from './Movies.module.css';

const Movies = () => {
  const [setsearchResults, setSetsearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [, setSearchParams] = useSearchParams();

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const query = event.target.elements[0].value.trim().toLowerCase();
      const { data: { results } } = await getMoviesByKeyWord(query);
      setSearchParams({ query });
      setSetsearchResults(results);
      event.target.elements[0].value = '';
    } catch (error) {
      alert(error.message || DEFAULT_ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch} className={style.form}>
        <input type="text" name="query" required />
        <button type="submit">Search</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !!setsearchResults.length && (
        <ul>
          {setsearchResults.map(({ id, title, name, original_name }) => (
            <MovieLink
              key={id}
              to={`/movies/${id}`}
              text={title || name || original_name}
            />
          ))}
        </ul>
      )}
      {!isLoading && !setsearchResults.length && 'Sorry! No movies were found'}
    </div>
  )
};

export default Movies;