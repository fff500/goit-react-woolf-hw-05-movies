import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { MovieLink } from 'components/MovieLink/MovieLink';
import { getMoviesByKeyWord } from 'api/themoviedb-api';
import { DEFAULT_ERROR_MESSAGE } from 'constants/constants';

import style from './Movies.module.css';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchDone, setIsSearchDone] = useState(false);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      setIsSearchDone(false);
      setIsLoading(true);
      const query = event.target.elements[0].value.trim().toLowerCase();
      const { data: { results } } = await getMoviesByKeyWord(query);
      setSearchParams({ query });
      setSearchResults(results);
      sessionStorage.setItem(query, JSON.stringify(results));
      event.target.elements[0].value = '';
    } catch (error) {
      alert(error.message || DEFAULT_ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
      setIsSearchDone(true);
    }
  }

  useEffect(() => {
    if (query) {
      setSearchResults(JSON.parse(sessionStorage.getItem(query)));
    }
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSearch} className={style.form}>
        <input type="text" name="query" required />
        <button type="submit">Search</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !!searchResults.length && (
        <ul>
          {searchResults.map(({ id, title, name, original_name }) => (
            <MovieLink
              key={id}
              text={title || name || original_name}
              to={`/movies/${id}`}
              state={location}
            />
          ))}
        </ul>
      )}
      {isSearchDone && !searchResults.length && 'Sorry! No movies were found'}
    </div>
  )
};

export default Movies;