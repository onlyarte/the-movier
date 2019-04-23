import { connect } from 'react-redux';
import { toggleNav } from '../actions/ui';
import App from '../components/app';

const mapDispatchToProps = dispatch => ({
  onToggleNav: isOpen => dispatch(toggleNav(isOpen)),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
