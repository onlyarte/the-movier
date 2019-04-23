import axios from 'axios';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const DESTROY_MOVIE = 'DESTROY_MOVIE';

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies: movies.reduce(
    (accumulator, movie) => ({ ...accumulator, [movie.id]: movie }),
    {}
  ),
});

export const destroyMovie = movie_id => ({
  type: DESTROY_MOVIE,
  movie_id,
});

export const fetchMovie = movie_id => dispatch => {
  return axios
    .get(`http://localhost:3000/movies/${movie_id}`)
    .then(({ data }) => {
      dispatch(receiveMovies([data]));
      return data;
    });
};

export const fetchMovies = query => dispatch => {
  return axios
    .get(`http://localhost:3000/movies?q=${query}`)
    .then(({ data }) => {
      dispatch(receiveMovies(data));
      return data;
    });
};
