import { RECEIVE_LISTS, DESTROY_LIST } from '../../actions/entities/lists';

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
        [action.listId]: undefined,
      };
    default:
      return state;
  }
};

export default lists;
