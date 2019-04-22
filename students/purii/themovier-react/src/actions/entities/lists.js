import axios from 'axios';
import { pushListsToUser } from './users';

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

export const fetchUserLists = user_id => dispatch => {
  return axios
    .get(`http://localhost:3000/users/${user_id}/lists`)
    .then(({ data }) => {
      dispatch(receiveLists(data));
      dispatch(pushListsToUser(user_id, data.map(l => l.id)));
      return data;
    });
};
