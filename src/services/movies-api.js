import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14c33d552675486cef6b4da0bdfccda9';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  page: 1,
  language: 'en-US',
};

export const searchMovies = async query => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: { query },
    });

    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const getTrending = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const getMovieDetales = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const getMoviesCast = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/credits`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const getMoviesReviews = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/reviews`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const imgPath = 'https://image.tmdb.org/t/p/w200';
export const posterImgPath = `https://image.tmdb.org/t/p/w300/`;
