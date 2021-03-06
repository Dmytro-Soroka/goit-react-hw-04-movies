import React, { Component } from 'react';
import * as api from '../services/movies-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader';

export default class HomeView extends Component {
  state = {
    trending: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    api
      .getTrending()
      .then(({ results }) =>
        this.setState({
          trending: results,
        }),
      )
      .catch(error => toast.error(`ничего не найдено`))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { trending, isLoading } = this.state;
    return (
      <>
        <h1
          style={{
            padding: '25px 0px 25px 0px',
            textAlign: 'center',
            color: '#f8640e',
          }}
        >
          Trending today
        </h1>
        {isLoading && <Loader />}
        {trending && <MoviesList movies={trending} />}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
