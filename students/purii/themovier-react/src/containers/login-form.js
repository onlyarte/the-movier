import { connect } from 'react-redux';
import { logIn, signUp } from '../actions/session';
import LoginForm from '../components/login-form';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onLogIn: ({ username, password }) =>
    dispatch(logIn({ username, password })),
  onSignUp: ({ username, password, email, name }) =>
    dispatch(signUp({ username, password, email, name })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
