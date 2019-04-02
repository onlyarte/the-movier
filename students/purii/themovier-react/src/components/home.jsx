import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoginForm from './login-form';

const styles = theme => ({
  paper: {
    padding: 0,
    height: '100vh',
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black',
    color: 'white',
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
    <Grid container spacing={12}>
      <Grid item xs={12} md={6} lg={5}>
        <Paper className={classes.paper}>DEFAULT LIST</Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <Paper className={classes.paper}>
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
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
