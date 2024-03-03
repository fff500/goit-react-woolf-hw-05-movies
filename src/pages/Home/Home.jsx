import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTrendingMovies } from "api/themoviedb-api";

import React from 'react'


const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data: { results } } = await getTrendingMovies();

        setTrendingMovies(results);
        console.log(results);
      } catch (error) {
        alert(error.message);
      }
    }

    getMovies();
  }, [])


  return (
    <ul>
      {trendingMovies.map(({ id, original_name, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              {title || original_name}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}

export default Home
