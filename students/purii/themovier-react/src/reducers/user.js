import { RECEIVE_USER, DESTROY_USER } from '../actions/user';

const user = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case DESTROY_USER:
      return null;
    default:
      return state;
  }
};

export default user;
