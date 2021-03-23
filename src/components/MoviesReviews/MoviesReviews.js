import React, { Component } from 'react';
import * as api from '../../services/movies-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './MoviesReviews.module.css';

export default class MoviesReviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    api
      .getMoviesReviews(movieId)
      .then(reviews => {
        this.setState({
          reviews: [...reviews],
        });
      })
      .catch(error => {
        toast.error(error);
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className={styles.section}>
        <h2 className={styles.title}>Reviews</h2>
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}

        <ul className={styles.container}>
          {reviews.length !== 0 &&
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className={styles.subtitle}>Author: {author}</p>
                <p className={styles.text}>{content}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
