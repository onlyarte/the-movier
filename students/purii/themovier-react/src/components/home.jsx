import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../containers/login-form';

const styles = theme => ({
  paper: {
    padding: 20,
    height: 'calc(100vh - 40px)',
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  mergimText: {
    fontFamily: 'Megrim, cursive',
  },
  istokText: {
    fontFamily: 'Istok Web, sans-serif',
  },
});

function Home({ classes }) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={6} lg={5}>
        <div className={classes.paper}>DEFAULT LIST</div>
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <div className={classes.paper}>
          <Typography variant="h3" className={classes.mergimText}>
            THE MOVIER
          </Typography>
          <Typography variant="h4">
            COLLECTION
          </Typography>
          <Typography variant="h5" gutterBottom>
            {'movies | lists | channels'}
          </Typography>

          <LoginForm />
        </div>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
