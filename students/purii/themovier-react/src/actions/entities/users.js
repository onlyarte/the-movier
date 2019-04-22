import axios from 'axios';
import { receiveLists } from './lists';

export const RECEIVE_USER = 'RECEIVE_USER';
export const DESTROY_USER = 'DESTROY_USER';
export const PUSH_FOLLOWINGS_TO_USER = 'PUSH_FOLLOWINGS_TO_USER';
export const PUSH_LISTS_TO_USER = 'PUSH_LISTS_TO_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const destroyUser = user_id => ({
  type: DESTROY_USER,
  user_id,
});

export const pushFollowingsToUser = (user_id, following_ids) => ({
  type: PUSH_FOLLOWINGS_TO_USER,
  user_id,
  following_ids,
});

export const pushListsToUser = (user_id, list_ids) => ({
  type: PUSH_LISTS_TO_USER,
  user_id,
  list_ids,
});

export const fetchUser = user_id => dispatch => {
  return axios
    .get(`http://localhost:3000/users/${user_id}`)
    .then(({ data }) => {
      dispatch(receiveUser(data));
      return data;
    });
};

export const fetchUserFollowings = user_id => dispatch => {
  return axios
    .get(`http://localhost:3000/users/${user_id}/followings`)
    .then(({ data }) => {
      for (const user of data) dispatch(receiveUser(user));
      dispatch(pushFollowingsToUser(user_id, data.map(u => u.id)));
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

export const follow = (following_id, followed_id) => dispatch => {
  return axios
    .post(`http://localhost:3000/users/${following_id}/followings`, {
      followed_id,
    })
    .then(() => dispatch(fetchUserFollowings(following_id)));
};

export const unfollow = (following_id, followed_id) => dispatch => {
  return axios
    .delete(`http://localhost:3000/users/${following_id}/followings/${followed_id}`)
    .then(() => dispatch(fetchUserFollowings(following_id)));
}
