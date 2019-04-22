import axios from 'axios';
import { receiveMovies } from './movies';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const DESTROY_LIST = 'DESTROY_LIST';
export const PUSH_MOVIES_TO_LIST = 'PUSH_MOVIES_TO_LIST';

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists: lists.reduce(
    (accumulator, list) => ({ ...accumulator, [list.id]: list }),
    {}
  ),
});

export const destroyList = list_id => ({
  type: DESTROY_LIST,
  list_id,
});

export const pushMoviesToList = (list_id, movie_ids) => ({
  type: PUSH_MOVIES_TO_LIST,
  list_id,
  movie_ids,
});

export const fetchList = list_id => dispatch => {
  return axios
    .get(`http://localhost:3000/lists/${list_id}`)
    .then(({ data }) => {
      dispatch(receiveLists([data]));
      return data;
    });
};

export const fetchListMovies = list_id => dispatch => {
  return axios
    .get(`http://localhost:3000/lists/${list_id}/movies`)
    .then(({ data }) => {
      dispatch(receiveMovies(data));
      dispatch(pushMoviesToList(list_id, data.map(m => m.id)));
      return data;
    });
};

export const addMovieToList = (list_id, movie_id) => dispatch => {
  return axios
    .post(`http://localhost:3000/lists/${list_id}/movies`, { movie_id })
    .then(() => dispatch(fetchListMovies(list_id)));
};

export const deleteMovieFromList = (list_id, movie_id) => dispatch => {
  return axios
    .delete(`http://localhost:3000/lists/${list_id}/movies/${movie_id}`)
    .then(() => dispatch(fetchListMovies(list_id)));
};
