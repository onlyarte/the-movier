import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Link from '../link';
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
    padding: 20,
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    background: 'none',
    color: theme.palette.primary.contrastText,
  },
  leftPaper: {
    padding: 0,
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
  rightPaper: {
    background: theme.palette.primary.dark,
  },
});

class List extends Component {
  state = {
    activeMovieId: undefined,
  };

  handleActiveMovieChange = movieId => {
    this.setState({ activeMovieId: movieId });
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { list, classes } = this.props;
    const { activeMovieId } = this.state;

    if (!list) return <Loading />;

    let activeMovie;
    if (list.movies && list.movies.length > 0) {
      if (activeMovieId) {
        activeMovie = list.movies.find(m => m.id === activeMovieId);
      } else {
        activeMovie = list.movies[0];
      }
    }

    return (
      <Grid container spacing={0} className={classes.istokText}>
        <Grid item xs={12} md={6} lg={5}>
          <div className={classes.layerContainer}>
            <div className={classes.backLayer}>
              <img
                src={
                  activeMovie
                    ? activeMovie.poster
                    : 'https://m.media-amazon.com/images/M/MV5BNTAyOTkxNTQ3NV5BMl5BanBnXkFtZTgwMjQ1NzQxOTE@._V1_SX700.jpg'
                }
                alt="background"
                className={classes.backPoster}
              />
            </div>
            <div className={classes.frontLayer}>
              <div className={classNames(classes.paper, classes.leftPaper)}>
                <Typography variant="h6">
                  {list.title.toUpperCase()}
                </Typography>
                {list.author && (
                  <Typography variant="subtitle1" gutterBottom>
                    by <Link to={`/users/${list.author.id}`}>{list.author.name}</Link>
                  </Typography>
                )}

                <div className={classes.slider}>
                  {list.movies &&
                    list.movies.map(movie => (
                      <div
                        className={classes.sliderItem}
                        role="button"
                        onClick={e => this.handleActiveMovieChange(movie.id, e)}
                        key={movie.id}
                      >
                        <img
                          src={movie.poster}
                          alt="movie poster"
                          height={500}
                        />
                        <div className={classes.sliderItemTitle}>
                          {movie.title}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          {activeMovie && (
            <div className={classNames(classes.paper, classes.rightPaper)}>
              <Typography variant="h4" gutterBottom>
                {activeMovie.title}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                {activeMovie.year} | {activeMovie.genre}
              </Typography>

              <br />

              <Typography variant="body1" gutterBottom>
                {activeMovie.plot}
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
                    {activeMovie.directors}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Typography variant="body1" gutterBottom>
                    Writer
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                  <Typography variant="body1" gutterBottom>
                    {activeMovie.writers}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Typography variant="body1" gutterBottom>
                    Acting
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                  <Typography variant="body1" gutterBottom>
                    {activeMovie.actors}
                  </Typography>
                </Grid>
              </Grid>

              <ListPanel movieId={activeMovie.id} />
            </div>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(List);
