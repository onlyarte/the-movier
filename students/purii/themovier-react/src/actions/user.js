import axios from 'axios';

export const RECEIVE_USER = 'RECEIVE_USER';
export const DESTROY_USER = 'DESTROY_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const destroyUser = () => ({
  type: DESTROY_USER,
});

export const logIn = ({ username, password }) => dispatch => {
  return null;
};

export const signUp = ({ username, password, email, name }) => dispatch => {
  return axios
    .post('http://localhost:3000/users', { username, password, email, name })
    .then(({ data }) => {
      console.log(data);
    });
};
