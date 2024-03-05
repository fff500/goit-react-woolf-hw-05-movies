import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdlNGUxOTY2YmQ5MjdiZjFkNTVjZTNiNWI2ZjExNSIsInN1YiI6IjY1ZTRjZjBkYTY3MjU0MDE2MmE5OWQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5YUfqFEIeYNOXV5glwwmsAfcFy2uJj6yBmzayh7sSr8';
axios.defaults.headers.common['accept'] = 'application/json';

export const getTrendingMovies = async (time_window = 'day') => {
  return await axios.get(`/trending/all/${time_window}`);
};

export const getMovie = async movieId => {
  return await axios.get(`/movie/${movieId}`);
};

export const getMovieCredits = async movieId => {
  return await axios.get(`/movie/${movieId}/credits`);
};

export const getMovieReviews = async movieId => {
  return await axios.get(`/movie/${movieId}/reviews`);
};

export const getMoviesByKeyWord = async keyWord => {
  return await axios.get(`/search/movie?query=${keyWord}`);
};
