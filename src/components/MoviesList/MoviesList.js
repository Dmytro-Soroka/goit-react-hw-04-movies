import React from 'react';
import MoviesPreview from '../MoviesPreview/MoviesPreview';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import noMovieImg from '../../images/poster-is-not-available.jpg';
import routes from '../../routes';
import * as api from '../../services/movies-api';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={styles.item}>
          <Link
            className={styles.link}
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
          >
            <MoviesPreview
              title={title}
              imgUrl={
                poster_path ? api.posterImgPath + poster_path : noMovieImg
              }
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default withRouter(MoviesList);
