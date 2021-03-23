import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../../services/movies-api';
import noCastImg from '../../images/noimages-200x300.png';
import styles from './MovieCast.module.css';

export default class MovieCast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    api
      .getMoviesCast(movieId)
      .then(({ cast }) => {
        this.setState({
          cast: [...cast],
        });
      })
      .catch(error => toast.error(error));
  }

  render() {
    const { cast } = this.state;

    return (
      <div className={styles.section}>
        <h2 className={styles.title}>cast</h2>

        <ul className={styles.container}>
          {cast &&
            cast.map(({ credit_id, profile_path, character, name }) => (
              <li key={credit_id} className={styles.item}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={profile_path ? api.imgPath + profile_path : noCastImg}
                    alt={name}
                  />
                </div>
                <p className={styles.name}>{name}</p>
                <p className={styles.text}>Character: {character}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
