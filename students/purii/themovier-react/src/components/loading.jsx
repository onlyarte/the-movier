import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  loadingShadingMui: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  loadingIconMui: {
    position: 'absolute',
    fontSize: '20px',
    top: 'calc(45% - 10px)',
    left: 'calc(50% - 10px)',
  },
};

function Loading({ classes }) {
  return (
    <div className={classes.loadingShadingMui}>
      <CircularProgress className={classes.loadingIconMui} />
    </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
