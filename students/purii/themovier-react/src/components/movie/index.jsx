import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Loading from '../loading';
import ListPanel from '../../containers/movie/list-panel';

const styles = theme => ({
  istokText: {
    fontFamily: 'Istok Web, sans-serif',
    '& *': {
      fontFamily: 'Istok Web, sans-serif',
    },
  },
  paper: {
    height: 'calc(100vh - 40px)',
    padding: theme.spacing.unit * 5,
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    background: 'none',
    color: theme.palette.primary.contrastText,
  },
  leftPaper: {
    justifyContent: 'center',
    alignItems: 'center',
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
  rightPaper: {
    // clear: 'both',
    background: theme.palette.primary.dark,
  },
});

class Movie extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { movie, classes } = this.props;

    if (!movie) return <Loading />;

    return (
      <Grid container spacing={0} className={classes.istokText}>
        <Grid item xs={12} md={6} lg={5}>
          <div className={classes.layerContainer}>
            <div className={classes.backLayer}>
              <img src={movie.poster} className={classes.backPoster} />
            </div>
            <div className={classes.frontLayer}>
              <div className={classNames(classes.paper, classes.leftPaper)}>
                <Typography variant="h6" gutterBottom>
                  {movie.title.toUpperCase()}
                </Typography>
                <img src={movie.poster} alt="movie poster" width={400} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <div className={classNames(classes.paper, classes.rightPaper)}>
            <Typography variant="h4" gutterBottom>
              {movie.title}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              {movie.year} | {movie.genre}
            </Typography>

            <br />

            <Typography variant="body1" gutterBottom>
              {movie.plot}
            </Typography>

            <br />

            <Grid container spacing={8}>
              <Grid item xs={12} md={6} lg={4}>
                <Typography variant="body1" gutterBottom>
                  Director
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <Typography variant="body1" gutterBottom>
                  {movie.directors}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Typography variant="body1" gutterBottom>
                  Writer
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <Typography variant="body1" gutterBottom>
                  {movie.writers}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Typography variant="body1" gutterBottom>
                  Acting
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <Typography variant="body1" gutterBottom>
                  {movie.actors}
                </Typography>
              </Grid>
            </Grid>

            <ListPanel movieId={movie.id} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Movie);
