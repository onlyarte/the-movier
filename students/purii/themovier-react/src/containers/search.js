import { connect } from 'react-redux';
import qs from 'qs';
import { fetchMovies } from '../actions/entities/movies';
import { fetchLists, fetchListMovies } from '../actions/entities/lists';
import Search from '../components/search';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { q: query } = qs.parse(ownProps.location.search, {
    ignoreQueryPrefix: true,
  });
  return {
    fetch: () =>
      Promise.all([
        dispatch(fetchMovies(query)),
        dispatch(fetchLists(query)).then(lists =>
          Promise.all(
            lists.map(list =>
              dispatch(fetchListMovies(list.id)).then(movies => ({
                ...list,
                movies,
              }))
            )
          )
        ),
      ]),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
