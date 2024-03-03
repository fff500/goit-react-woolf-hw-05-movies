import { Layout } from "components/Layout/Layout";
import { lazy } from "react";

import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Movie = lazy(() => import('./pages/Movie/Movie'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
