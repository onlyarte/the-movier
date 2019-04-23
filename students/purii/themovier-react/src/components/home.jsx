import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../containers/login-form';
import Link from './link';

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
  layerContainer: {
    position: 'relative',
  },
  backLayer: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  backPoster: {
    filter: 'blur(15px)',
    transform: 'scale(1.1)',
  },
  frontLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    background: 'none',
  },
  slider: {
    padding: '20px 0px',
    width: '100%',
    overflowX: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  sliderItem: {
    margin: '0px 15px',
    cursor: 'pointer',
  },
  sliderItemTitle: {
    margin: '15px 0px',
    textAlign: 'center',
  },
  mergimText: {
    fontFamily: 'Megrim, cursive',
  },
  istokText: {
    fontFamily: 'Istok Web, sans-serif',
  },
});

function Home({ popularMovies, popularUsers, isLoggedIn, classes }) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={6} lg={5}>
        
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <div className={classes.paper}>
          <Typography variant="h3" className={classes.mergimText}>
            THE MOVIER
          </Typography>
          <Typography variant="h4">COLLECTION</Typography>
          <Typography variant="h5" gutterBottom>
            {'movies | lists | channels'}
          </Typography>

          {!isLoggedIn && <LoginForm />}
        </div>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
