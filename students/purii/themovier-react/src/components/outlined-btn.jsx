import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    width: 120,
    height: 50,
    padding: '0px 20px',
    border: '5px solid white',
    borderRadius: 50,
    color: 'white',
    background: 'none',
    cursor: 'pointer',
    outline: 'none',
    fontWeight: 800,
  },
});

function OutlinedBtn({ children, onClick, classes }) {
  if (children) {
    return (
      <button type="button" onClick={onClick} className={classes.button}>
        {children}
      </button>
    );
  }

  return null;
}

export default withStyles(styles)(OutlinedBtn);
