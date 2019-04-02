import { connect } from 'react-redux';
import { fetchList } from '../actions/entities/lists';
import List from '../components/list/index';

const mapStateToProps = (state, ownProps) => ({
  list: state.entities.lists[ownProps.match.params.listId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetch: () => dispatch(fetchList(ownProps.match.params.listId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
