import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/AppBar';
import routes from './routes';
import NotFoundView from './views/NotFoundView';
import Loader from './components/Loader';
import styles from './index.css';

const HomeView = lazy(() => import('./views/HomeView'));

const SearchMovieView = lazy(() => import('./views/SearchMovieView.js'));

const MoviesDetailsView = lazy(() => import('./views/MoviesDetailsView.js'));

const App = () => (
  <div className={styles.container}>
    <Nav />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.movies} component={SearchMovieView} />
        <Route path={routes.movieId} component={MoviesDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
