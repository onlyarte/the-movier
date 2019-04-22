import {
  RECEIVE_USER,
  DESTROY_USER,
  PUSH_FOLLOWINGS_TO_USER,
  PUSH_LISTS_TO_USER,
} from '../../actions/entities/users';

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
        [action.user_id]: undefined,
      };
    case PUSH_FOLLOWINGS_TO_USER:
      return {
        ...state,
        [action.user_id]: {
          ...state[action.user_id],
          following_ids: action.following_ids,
        },
      };
    case PUSH_LISTS_TO_USER:
      return {
        ...state,
        [action.user_id]: {
          ...state[action.user_id],
          list_ids: action.list_ids,
        },
      };
    default:
      return state;
  }
};

export default users;
