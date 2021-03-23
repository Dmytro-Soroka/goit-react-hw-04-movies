import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/movies-api';
import { NavLink, withRouter } from 'react-router-dom';
import noMovieImg from '../../images/poster-is-not-available.jpg';
import styles from './MovieCard.module.css';
import routes from '../../routes';

function MovieCard({ movie, location }) {
  const from = location.state?.from;
  const {
    poster_path,
    original_name,
    vote_average,
    overview,
    genres,
    id,
  } = movie;
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src={poster_path ? api.imgPath + poster_path : noMovieImg}
          alt={original_name}
        />
      </div>
      <div className={styles.iner}>
        <div>
          <h3 className={styles.subtitle}>{`User score: ${
            vote_average * 10
          }%`}</h3>
          <h3 className={styles.subtitle}>Overview</h3>
          <p className={styles.text}>{overview}</p>
          <h3 className={styles.subtitle}>Genres</h3>
          <ul className={(styles.text, styles.genreList)}>
            {genres &&
              genres.map(({ id, name }) => (
                <li className={styles.genre} key={id}>
                  {name}
                </li>
              ))}
          </ul>
          <h3 className={styles.subtitle}>Editional information</h3>
        </div>
        <ul className={styles.list}>
          <li>
            <NavLink
              to={{
                pathname: `${routes.movies}/${id}/cast`,
                state: { from },
              }}
              className={styles.link}
              activeClassName={styles.activLink}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${routes.movies}/${id}/reviews`,
                state: { from },
              }}
              className={styles.link}
              activeClassName={styles.activLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default withRouter(MovieCard);
