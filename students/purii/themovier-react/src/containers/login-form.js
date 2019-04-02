import { connect } from 'react-redux';
import { signUp } from '../actions/user';
import LoginForm from '../components/login-form';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSignUp: ({ username, password, email, name }) =>
    dispatch(signUp({ username, password, email, name })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
