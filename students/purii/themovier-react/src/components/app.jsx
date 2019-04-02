import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Nav from './nav';
import Home from './home';
import List from '../containers/list';
import Movie from '../containers/movie';
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
  }
});

class App extends Component {
  state = {
    isNavOpen: false,
  };

  toggleNav = () => {
    const { isNavOpen } = this.state;
    this.setState({ isNavOpen: !isNavOpen });
  };

  render() {
    const { classes } = this.props;
    const { isNavOpen } = this.state;

    return (
      <Router>
        <div className={classes.root}>
          <Fab
            color="secondary"
            aria-label="Add"
            className={classes.fab}
            onClick={this.toggleNav}
          >
            <MenuIcon />
          </Fab>

          <Nav isOpen={isNavOpen} onClose={this.toggleNav} />
          
          <main className={classes.main}>
            <Route exact path="/" component={Home} />
            <Route path="/lists/:listId" component={List} />
            <Route path="/movies/:movieId" component={Movie} />
            <Route path="/admin" component={Admin} />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
