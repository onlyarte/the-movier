import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  componentDidMount() {
    const { list, fetch } = this.props;
    if (!list) fetch();
  }

  render() {
    const { match, list } = this.props;

    if (!list) return null;

    console.log(list);

    return (
      <div>
        LIST #{match.params.listId}: {list.title}
      </div>
    );
  }
}

export default List;
