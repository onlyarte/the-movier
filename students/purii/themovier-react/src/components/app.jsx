import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import Nav from './nav';
import Home from './home';
import Lists from './lists/index';

const styles = theme => ({
  root: {
    position: 'relative',
  },
  fab: {
    margin: theme.spacing.unit * 2,
    position: 'absolute',
    top: 0,
    left: 0,
  },
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
          
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/lists" component={Lists} />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
