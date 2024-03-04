import { getMovieReviews } from 'api/themoviedb-api';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async (movieId) => {
      try {
        const { data: { results } } = await getMovieReviews(movieId);

        setReviews(results);
        console.log(results);

      } catch (error) {
        alert(error.message);
      }
    }

    fetchMovie(movieId);


  }, [movieId])

  return (
    <>
      {reviews && (<ul>
        {reviews.map(({ id, author, content }) => {
          return (<li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>)
        })}
      </ul>)}
    </>
  )
}

export default Reviews