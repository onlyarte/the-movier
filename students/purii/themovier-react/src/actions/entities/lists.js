import axios from 'axios';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const DESTROY_LIST = 'DESTROY_LIST';

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists: lists.reduce(
    (accumulator, list) => ({ ...accumulator, [list.id]: list }),
    {}
  ),
});

export const destroyList = listId => ({
  type: DESTROY_LIST,
  listId,
});

export const fetchList = listId => dispatch => {
  return axios.get(`http://localhost:3000/lists/${listId}`).then(({ data }) => {
    console.log(data);
    dispatch(receiveLists([data]));
  });
};

export const fetchUserLists = userId => dispatch => {
  return axios
    .get(`http://localhost:3000/users/${userId}/lists`)
    .then(({ data }) => {
      console.log(data);
      dispatch(receiveLists(data));
    });
};
