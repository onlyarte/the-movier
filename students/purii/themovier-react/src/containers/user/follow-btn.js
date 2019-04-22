import { connect } from 'react-redux';
import OutlinedBtn from '../../components/outlined-btn';
import { unfollow, follow } from '../../actions/entities/users';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const props = {};
  const currentUser = state.entities.users[state.session.userId];
  if (currentUser && currentUser.id !== ownProps.userId) {
    if (currentUser.following_ids) {
      if (currentUser.following_ids.includes(ownProps.userId)) {
        props.children = 'Unfollow';
        props.onClick = () => dispatch(unfollow(currentUser.id, ownProps.userId));
      } else {
        props.children = 'Follow';
        props.onClick = () => dispatch(follow(currentUser.id, ownProps.userId));
      }
    }
  }
  return props;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(OutlinedBtn);
