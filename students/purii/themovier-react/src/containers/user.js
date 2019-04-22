import { connect } from 'react-redux';
import { fetchUserLists } from '../actions/entities/lists';
import { fetchListMovies } from '../actions/entities/movies';
import { fetchUser, fetchUserFollowings } from '../actions/entities/users';
import User from '../components/user/index';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const { userId } = ownProps.match.params;
  const props = {};

  props.user = state.entities.users[userId] && {
    ...state.entities.users[userId],
  };
  if (props.user) {
    if (props.user.list_ids)
      props.user.lists = props.user.list_ids
        .map(id => state.entities.lists[id])
        .map(list =>
          list.movie_ids
            ? {
                ...list,
                movies: list.movie_ids.map(id => state.entities.movies[id]),
              }
            : list
        );
    if (props.user.following_ids)
      props.user.followings = props.user.following_ids.map(
        id => state.entities.users[id]
      );
  }

  props.fetch = () => {
    if (!props.user) {
      dispatch(fetchUser(userId)).then(user => {
        console.log(user);
        dispatch(fetchUserLists(userId)).then(lists => {
          Promise.all(lists.map(list => dispatch(fetchListMovies(list.id))));
        });
        dispatch(fetchUserFollowings(userId));
      });
    } else {
      if (!props.user.following_ids) {
        dispatch(fetchUserFollowings(userId));
      }
      if (!props.user.list_ids) {
        dispatch(fetchUserLists(userId)).then(lists =>
          Promise.all(lists.map(list => dispatch(fetchListMovies(list.id))))
        );
      }
    }
  };

  return props;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(User);
