import { connect } from 'react-redux';
import { fetchMovie } from '../actions/entities/movies';
import Movie from '../components/movie/index';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({ dispatch });

const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const props = {};

  props.movie = state.entities.movies[ownProps.match.params.movieId];

  props.fetch = () => {
    if (!props.movie) {
      dispatch(fetchMovie(ownProps.match.params.movieId));
    }
  };

  return props;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Movie);
