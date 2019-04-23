import { connect } from 'react-redux';
import OutlinedBtn from '../../components/outlined-btn';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const props = {};
  const currentUser = state.session && state.entities.users[state.session.userId];
  if (currentUser && currentUser.id === ownProps.userId) {
    props.children = 'Edit';
    // props.onClick = () => dispatch(unfollow(currentUser.id, ownProps.userId));
  }
  return props;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(OutlinedBtn);
