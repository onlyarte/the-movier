import { connect } from 'react-redux';
import Home from '../components/home';

const mapStateToProps = state => ({
  isLoggedIn: !!(state.session && state.session.userId),
});

export default connect(mapStateToProps)(Home);
