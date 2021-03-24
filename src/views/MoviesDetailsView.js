import React, { Component, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../services/movies-api';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';
import styles from '../components/MovieCard/MovieCard.module.css';
import routes from '../routes';

const MoviesCast = lazy(() => import('../components/MovieCast/MovieCast'));

const MoviesReviews = lazy(() =>
  import('../components/MoviesReviews/MoviesReviews'),
);

export default class MoviesDetailsView extends Component {
  state = {
    movie: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    const response = await api
      .getMovieDetales(movieId)
      .catch(error => toast.error(error))
      .finally(() => this.setState({ isLoading: false }));
    this.setState({ movie: response });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push(this.props.location?.state?.from || routes.home);
  };

  render() {
    const { movie, isLoading } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {movie && (
          <div className={styles.wrapper}>
            <div className={styles.titleBox}>
              <h1 className={styles.movieName}>{movie.title}</h1>
              <button
                className={styles.goBack}
                type="button"
                onClick={this.handleGoBack}
              >
                <span>&#8592;</span>Go back
              </button>
            </div>

            <div className={styles.iner}>
              <MovieCard movie={movie} />
            </div>            
              <Switch>
                <Route path={`${routes.movieId}/cast`} component={MoviesCast} />
                <Route
                  path={`${routes.movieId}/reviews`}
                  component={MoviesReviews}
                />
              </Switch>            
          </div>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
