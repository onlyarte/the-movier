import axios from 'axios';

export const RECEIVE_USER = 'RECEIVE_USER';
export const DESTROY_USER = 'DESTROY_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const destroyUser = userId => ({
  type: DESTROY_USER,
  userId,
});

export const fetchUser = userId => dispatch => {
  return axios.get(`http://localhost:3000/users/${userId}`).then(({ data }) => {
    console.log(data);
    dispatch(receiveUser(data));
  });
};
