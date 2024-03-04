import { NavLink } from "react-router-dom";

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to={'/home'} className={styles.navLink}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'./movies'} className={styles.navLink}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};