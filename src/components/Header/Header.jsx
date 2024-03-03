import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'./movies'}>Movies</NavLink>
    </header>
  );
};