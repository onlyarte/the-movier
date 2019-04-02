import { RECEIVE_USER, DESTROY_USER } from '../../actions/entities/users';

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        [action.user.id]: action.user,
      };
    case DESTROY_USER:
      return {
        ...state,
        [action.userId]: undefined,
      };
    default:
      return state;
  }
};

export default users;
