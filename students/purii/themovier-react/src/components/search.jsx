import React, { Component } from 'react';
import qs from 'qs';
import classNames from 'classnames';
import {
  withStyles,
  Paper,
  InputBase,
  IconButton,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link as NativeLink } from 'react-router-dom';
import Link from './link';

const styles = theme => ({
  container: {
    padding: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: theme.palette.primary.contrastText,
  },
  searchBox: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    alignSelf: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
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

class Search extends Component {
  state = {
    query:
      qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).q || '',
    results: {},
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  fetchResults = () => {
    const { fetch } = this.props;
    const { query } = this.state;

    if (query !== '')
      fetch().then(([movies, lists]) => {
        console.log(movies, lists);
        this.setState({ results: { movies, lists } });
      });
  };

  componentDidMount() {
    this.fetchResults();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchResults();
    }
  }

  render() {
    const { classes } = this.props;
    const { query, results } = this.state;

    return (
      <div className={classes.container}>
        <Paper
          className={classNames(classes.searchBox, classes.gutterBottom)}
          elevation={1}
        >
          <InputBase
            className={classes.input}
            name="query"
            value={query}
            onChange={this.handleChange}
            placeholder="Search..."
          />
          <IconButton
            className={classes.iconButton}
            component={NativeLink}
            to={`/search?q=${encodeURIComponent(query)}`}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        <div className={classes.gutterBottom}>
          <Typography variant="h4" gutterBottom>
            Lists
          </Typography>

          <div className={classes.slider}>
            {results.lists && results.lists.length > 0 ? (
              results.lists.map(list => (
                <Link to={`/lists/${list.id}`} key={list.id}>
                  <div className={classes.sliderItem}>
                    <img
                      src={
                        list.movies && list.movies.length > 0
                          ? list.movies[0].poster
                          : ''
                      }
                      alt="list poster"
                      height={300}
                    />
                    <div className={classes.sliderItemTitle}>{list.title}</div>
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

        <div className={classes.gutterBottom}>
          <Typography variant="h4" gutterBottom>
            Movies
          </Typography>

          <div className={classes.slider}>
            {results.movies && results.movies.length > 0 ? (
              results.movies.map(movie => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <div className={classes.sliderItem}>
                    <img src={movie.poster} alt="movie poster" height={300} />
                    <div className={classes.sliderItemTitle}>{movie.title}</div>
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
    );
  }
}

export default withStyles(styles)(Search);
