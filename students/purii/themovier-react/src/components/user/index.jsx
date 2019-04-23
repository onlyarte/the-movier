import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Link from '../link';
import Loading from '../loading';
import FollowBtn from '../../containers/user/follow-btn';
import EditBtn from '../../containers/user/edit-btn';

const styles = theme => ({
  istokText: {
    fontFamily: 'Istok Web, sans-serif',
    '& *': {
      fontFamily: 'Istok Web, sans-serif',
    },
  },
  paper: {
    height: `calc(100vh - ${theme.spacing.unit * 5 * 2}px)`,
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
  backImg: {
    height: '100%',
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
  frontImg: {
    width: 200,
    borderRadius: 100,
  },
  frontTitle: {
    margin: '20px 0px',
  },
  rightPaper: {
    // clear: 'both',
    background: theme.palette.primary.dark,
  },
  slider: {
    width: '100%',
    overflowX: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  sliderItem: {
    marginRight: 30,
    cursor: 'pointer',
  },
  sliderItemTitle: {
    margin: '15px 0px',
    textAlign: 'center',
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 3,
  },
});

class User extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { user, classes } = this.props;

    if (!user) return <Loading />;

    return (
      <Grid container spacing={0} className={classes.istokText}>
        <Grid item xs={12} md={6} lg={5}>
          <div className={classes.layerContainer}>
            <div className={classes.backLayer}>
              <img src={user.image} className={classes.backImg} />
            </div>
            <div className={classes.frontLayer}>
              <div className={classNames(classes.paper, classes.leftPaper)}>
                <img src={user.image} alt="user" className={classes.frontImg} />
                <Typography variant="h6" className={classes.frontTitle}>
                  {user.name.toUpperCase()}
                </Typography>
                <FollowBtn userId={user.id} />
                <EditBtn userId={user.id} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <div className={classNames(classes.paper, classes.rightPaper)}>
            <div className={classes.gutterBottom}>
              <Typography variant="h4" gutterBottom>
                Following
              </Typography>

              {user.followings && user.followings.length > 0 ? (
                <div className={classes.slider}>
                  {user.followings.map(following => (
                    <Link to={`/users/${following.id}`} key={following.id}>
                      <div className={classes.sliderItem}>
                        <img src={following.image} alt="user" height={200} />
                        <div className={classes.sliderItemTitle}>
                          {following.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <Typography variant="subtitle1" gutterBottom>
                  Not found
                </Typography>
              )}
            </div>

            <div className={classes.gutterBottom}>
              <Typography variant="h4" gutterBottom>
                Lists
              </Typography>

              <div className={classes.slider}>
                {user.lists && user.lists.length > 0 ? (
                  user.lists.map(list => (
                    <Link to={`/lists/${list.id}`} key={list.id}>
                      <div className={classes.sliderItem}>
                        <img
                          src={
                            list.movies && list.movies.length > 0
                              ? list.movies[0].poster
                              : ''
                          }
                          alt="movie poster"
                          height={300}
                        />
                        <div className={classes.sliderItemTitle}>
                          {list.title}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <Typography variant="subtitle1" gutterBottom>
                    Not found
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(User);
