import React from 'react';
import { Link as NativeLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
});

function Link({ to, children, classes }) {
  return (
    <NativeLink to={to} className={classes.link}>
      {children}
    </NativeLink>
  );
}

export default withStyles(styles)(Link);
