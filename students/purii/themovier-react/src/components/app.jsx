import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Nav from '../containers/nav';
import Home from '../containers/home';
import List from '../containers/list';
import Movie from '../containers/movie/index';
import User from '../containers/user/index';
import Admin from './admin/index';

const styles = theme => ({
  root: {
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    margin: theme.spacing.unit * 2,
  },
  main: {
    width: '100%',
    height: '100vh',
  },
});

function App({ onToggleNav, classes }) {
  return (
    <Router>
      <div className={classes.root}>
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={onToggleNav}
        >
          <MenuIcon />
        </Fab>

        <Nav onClose={() => onToggleNav(false)} />

        <main className={classes.main}>
          <Route exact path="/" component={Home} />
          <Route path="/lists/:listId" component={List} />
          <Route path="/movies/:movieId" component={Movie} />
          <Route path="/users/:userId" component={User} />
          <Route exact path="/admin" component={Admin} />
        </main>
      </div>
    </Router>
  );
}

export default withStyles(styles)(App);
