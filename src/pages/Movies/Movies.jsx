import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { getMoviesByKeyWord } from 'api/themoviedb-api';

const Movies = () => {
  const [setsearchResults, setSetsearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    const query = event.target.elements[0].value.trim().toLowerCase();

    const { data: { results } } = await getMoviesByKeyWord(query);

    setSetsearchResults(results);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" id="query" />
        <button type="submit">Search</button>
      </form>
      {!!setsearchResults.length && <ul>
        {setsearchResults.map(({ id, original_name, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                {title || original_name}
              </Link>
            </li>
          );
        })}
      </ul>}
    </div>
  )
}

export default Movies