import axios from 'axios';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const DESTROY_LIST = 'DESTROY_LIST';

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists,
});

export const destroyList = () => ({
  type: DESTROY_LIST,
});

export const fetchList = listId => dispatch => {
  return axios.get(`http://localhost:3000/lists/${listId}`).then(({ data }) => {
    console.log(data);
  });
};

export const insertOne = list => dispatch => {
  return axios.post(
    ``,
    list
  )
}
