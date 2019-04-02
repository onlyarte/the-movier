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

export const destroyMovie = movieId => ({
  type: DESTROY_MOVIE,
  movieId,
});

export const fetchMovie = movieId => dispatch => {
  return axios
    .get(`http://localhost:3000/movies/${movieId}`)
    .then(({ data }) => {
      console.log(data);
      dispatch(receiveMovies([data]));
    });
};

export const fetchMovies = query => dispatch => {
  return axios
    .get(`http://localhost:3000/movies?query=${encodeURIComponent(query)}`)
    .then(({ data }) => {
      console.log(data);
      dispatch(receiveMovies(data));
    });
};

export const fetchListMovies = listId => dispatch => {
  return axios
    .get(`http://localhost:3000/lists/${listId}/movies`)
    .then(({ data }) => {
      console.log(data);
    });
};
