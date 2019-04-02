import { connect } from 'react-redux';
import { fetchMovie } from '../actions/entities/movies';
import Movie from '../components/movie/index';

const mapStateToProps = (state, ownProps) => ({
  movie: state.entities.movies[ownProps.match.params.movieId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetch: () => dispatch(fetchMovie(ownProps.match.params.movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
