import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  panel: {
    margin: '20px 0px',
    dispalay: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: 120,
    height: 50,
    padding: '0px 20px',
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: 50,
    color: 'white',
    background: theme.palette.primary.dark,
    cursor: 'pointer',
    outline: 'none',
    fontWeight: 800,
  },
  itemActive: {
    background: theme.palette.primary.main,
  },
});

function ListPanel({ movieId, lists, onAdd, onDelete, classes }) {
  if (!lists) return null;

  return (
    <div className={classes.panel}>
      {lists.map(list => (
        <button
          type="button"
          className={classNames(classes.item, {
            [classes.itemActive]:
              list.movie_ids && list.movie_ids.includes(movieId),
          })}
          onClick={
            list.movie_ids && list.movie_ids.includes(movieId)
              ? e => onDelete(list.id, e)
              : e => onAdd(list.id, e)
          }
          key={list.id}
        >
          {list.title}
        </button>
      ))}
    </div>
  );
}

export default withStyles(styles)(ListPanel);
