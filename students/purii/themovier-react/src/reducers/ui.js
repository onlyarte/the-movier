import { TOGGLE_NAV } from '../actions/ui';

const ui = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        isNavOpen:
          action.isOpen == null || typeof action.isOpen !== 'boolean'
            ? !state.isNavOpen
            : action.isOpen,
      };
    default:
      return state;
  }
};

export default ui;
