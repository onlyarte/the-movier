import { RECEIVE_SESSION, DESTROY_SESSION } from '../actions/session';

const session = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_SESSION:
      return action.session;
    case DESTROY_SESSION:
      return null;
    default:
      return state;
  }
};

export default session;
