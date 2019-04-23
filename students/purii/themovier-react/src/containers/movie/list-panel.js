import { connect } from 'react-redux';
import ListPanel from '../../components/movie/list-panel';
import {
  addMovieToList,
  deleteMovieFromList,
} from '../../actions/entities/lists';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const props = { ...ownProps };
  const currentUser = state.session && state.entities.users[state.session.userId];
  if (currentUser && currentUser.list_ids) {
    props.lists = currentUser.list_ids.map(id => state.entities.lists[id]);
  }
  props.onAdd = listId => dispatch(addMovieToList(listId, ownProps.movieId));
  props.onDelete = listId => dispatch(deleteMovieFromList(listId, ownProps.movieId));
  return props;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ListPanel);
