import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header>
      <nav className={styles.list}>
        <NavLink
          exact
          to={routes.home}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
