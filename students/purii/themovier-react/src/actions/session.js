import axios from 'axios';
import { receiveUser, fetchUserFollowings } from './entities/users';
import { fetchUserLists } from './entities/users';
import { fetchListMovies } from './entities/lists';

export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const DESTROY_SESSION = 'DESTROY_SESSION';

export const receiveSession = session => ({
  type: RECEIVE_SESSION,
  session,
});

export const destroySession = () => ({
  type: DESTROY_SESSION,
});

export const logIn = ({ username, password }) => dispatch => {
  return axios
    .post('http://localhost:3000/auth/login', { username, password })
    .then(({ data: user }) => {
      dispatch(receiveUser(user));
      dispatch(receiveSession({ userId: user.id }));
      dispatch(fetchUserFollowings(user.id));
      dispatch(fetchUserLists(user.id)).then(lists =>
        Promise.all(lists.map(list => dispatch(fetchListMovies(list.id))))
      );
    });
};

export const logOut = () => dispatch => {
  return dispatch(destroySession());
};

export const signUp = ({ username, password, email, name }) => dispatch => {
  return axios
    .post('http://localhost:3000/auth/signup', {
      username,
      password,
      email,
      name,
    })
    .then(({ data: user }) => {
      console.log(user);
      dispatch(receiveUser(user));
      dispatch(receiveSession({ userId: user.id }));
      dispatch(fetchUserFollowings(user.id));
      dispatch(fetchUserLists(user.id)).then(lists =>
        Promise.all(lists.map(list => dispatch(fetchListMovies(list.id))))
      );
    });
};
