import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getMovieCredits } from 'api/themoviedb-api';
import { DEFAULT_ERROR_MESSAGE } from 'constants/constants';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const handleLoadMovieCast = async (movieId) => {
      try {
        const { data: { cast } } = await getMovieCredits(movieId);

        setCast(cast);
      } catch (error) {
        alert(error.message || DEFAULT_ERROR_MESSAGE);
      }
    }

    handleLoadMovieCast(movieId);

  }, [movieId])

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img src={profile_path} alt="Actress / actor" />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cast;