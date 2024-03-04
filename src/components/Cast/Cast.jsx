import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getMovieCredits } from 'api/themoviedb-api';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async (movieId) => {
      try {
        const { data: { cast } } = await getMovieCredits(movieId);

        setCast(cast);
      } catch (error) {
        alert(error.message);
      }
    }

    fetchMovie(movieId);

  }, [movieId])

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <img src={profile_path} alt="Actress / actor" />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            )
          })}
        </ul>)
      }
    </div>
  )
}

export default Cast