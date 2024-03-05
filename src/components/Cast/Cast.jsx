import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getMovieCredits } from 'api/themoviedb-api';
import { BASE_IMAGE_URL, DEFAULT_ERROR_MESSAGE } from 'constants/constants';

import style from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const handleLoadMovieCast = async movieId => {
      try {
        const {
          data: { cast },
        } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        alert(error.message || DEFAULT_ERROR_MESSAGE);
      }
    };

    handleLoadMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={style.item}>
              <img
                src={`${BASE_IMAGE_URL}/w500${profile_path}`}
                alt="Actress / actor"
                className={style.image}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
