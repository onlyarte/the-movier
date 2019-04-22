import {
  RECEIVE_LISTS,
  DESTROY_LIST,
  PUSH_MOVIES_TO_LIST,
} from '../../actions/entities/lists';

const lists = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LISTS:
      return {
        ...state,
        ...action.lists,
      };
    case DESTROY_LIST:
      return {
        ...state,
        [action.list_id]: undefined,
      };
    case PUSH_MOVIES_TO_LIST:
      return {
        ...state,
        [action.list_id]: {
          ...state[action.list_id],
          movie_ids: action.movie_ids,
        },
      };
    default:
      return state;
  }
};

export default lists;
