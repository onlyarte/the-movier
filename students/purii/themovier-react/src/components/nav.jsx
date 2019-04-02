import React, { Fragment } from 'react';
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

const styles = {
  list: {
    width: 250,
  },
};

function NavBar({
  isOpen,
  onClose,
  searchQuery,
  onSearchQueryChange,
  searchResults,
  classes,
}) {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div
        tabIndex={0}
        role="button"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <div className={classes.list}>
          <List>
            <ListItem button onClick={onClose}>
              <ListItemIcon><ChevronLeftIcon color="inherit" /></ListItemIcon>
              <ListItemText primary="THE MOVIER" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ExploreIcon color="inherit" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <ExploreIcon color="inherit" />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </List>
          <Divider />
          {searchResults &&
            searchResults.length >
              0(
                <Fragment>
                  <List>
                    {searchResults.map(movie => (
                      <ListItem key={movie.id}>
                        <ListItemIcon>
                          <ExploreIcon color="inherit" />
                        </ListItemIcon>
                        <ListItemText primary={movie.title} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                </Fragment>
              )}
          {searchResults && searchResults.length === 0 && (
            <Fragment>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ExploreIcon color="inherit" />
                  </ListItemIcon>
                  <ListItemText primary="Nothing found" />
                </ListItem>
              </List>
              <Divider />
            </Fragment>
          )}
          {!searchResults && searchQuery && searchQuery !== '' && (
            <Fragment>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ExploreIcon color="inherit" />
                  </ListItemIcon>
                  <ListItemText primary="Loading..." />
                </ListItem>
              </List>
              <Divider />
            </Fragment>
          )}
          <List>
            <ListItem button>
              <ListItemIcon>
                <ProfileIcon color="inherit" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
