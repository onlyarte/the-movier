import { connect } from 'react-redux';
import { fetchList, pushMoviesToList } from '../actions/entities/lists';
import { fetchListMovies } from '../actions/entities/movies';
import { fetchUser } from '../actions/entities/users';
import List from '../components/list/index';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const { listId } = ownProps.match.params;
  const props = {};

  props.list = state.entities.lists[listId] && {
    ...state.entities.lists[listId],
  };
  if (props.list) {
    if (props.list.movie_ids)
      props.list.movies = props.list.movie_ids.map(
        id => state.entities.movies[id]
      );
    if (props.list.author_id)
      props.list.author = state.entities.users[props.list.author_id];
  }

  props.fetch = () => {
    if (!props.list) {
      dispatch(fetchList(listId)).then(list => {
        dispatch(fetchListMovies(listId));
        if (!state.entities.users[list.author_id]) {
          dispatch(fetchUser(list.author_id));
        }
      });
    } else {
      if (!props.list.movies) {
        dispatch(fetchListMovies(listId));
      }
      if (!props.list.author) {
        dispatch(fetchUser(props.list.author_id));
      }
    }
  };

  return props;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(List);
