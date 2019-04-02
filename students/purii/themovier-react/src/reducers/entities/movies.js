import { RECEIVE_MOVIES, DESTROY_MOVIE } from '../../actions/entities/movies';

const movies = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return {
        ...state,
        ...action.movies,
      };
    case DESTROY_MOVIE:
      return {
        ...state,
        [action.movieId]: undefined,
      };
    default:
      return state;
  }
};

export default movies;
