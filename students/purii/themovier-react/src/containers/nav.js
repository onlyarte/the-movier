import { connect } from 'react-redux';
import Nav from '../components/nav';

const mapStateToProps = state => ({
  isOpen: state.ui.isNavOpen,
  currentUser: state.session && state.entities.users[state.session.userId],
});

export default connect(mapStateToProps)(Nav);
