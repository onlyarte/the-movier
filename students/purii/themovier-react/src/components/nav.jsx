import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExploreIcon from '@material-ui/icons/Explore';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const styles = theme => ({
  paper: {
    background: theme.palette.primary.dark,
  },
  list: {
    width: 250,
  },
});

function NavBar({ isOpen, onClose, currentUser, classes }) {
  return (
    <Drawer open={isOpen} onClose={onClose} classes={{ paper: classes.paper }}>
      <div tabIndex={0} role="button" onClick={onClose} onKeyDown={onClose}>
        <div className={classes.list}>
          <List>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <ChevronLeftIcon color="inherit" />
              </ListItemIcon>
              <ListItemText primary="THE MOVIER" />
            </ListItem>
            <ListItem component={Link} to="/">
              <ListItemIcon>
                <ExploreIcon color="inherit" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem component={Link} to="/search">
              <ListItemIcon>
                <SearchIcon color="inherit" />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </List>
          <Divider />
          <List>
            {currentUser && (
              <ListItem component={Link} to={`/users/${currentUser.id}`}>
                <ListItemIcon>
                  <ProfileIcon color="inherit" />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            )}
            {currentUser && currentUser.is_super && (
              <ListItem component={Link} to="/admin">
                <ListItemIcon>
                  <SettingsIcon color="inherit" />
                </ListItemIcon>
                <ListItemText primary="Control Panel" />
              </ListItem>
            )}
          </List>
        </div>
      </div>
    </Drawer>
  );
}

NavBar.defaultProps = {
  isNavOpen: false,
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
