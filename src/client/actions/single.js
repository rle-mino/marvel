import requestJson from '../requestJson';

export const SINGLE_FETCHED = 'SINGLE_FETCHED';
export const SINGLE_CLOSED = 'SINGLE_CLOSED';

const singleFetched = single => ({
  type: SINGLE_FETCHED,
  payload: single,
});

export const closed = () => ({
  type: SINGLE_CLOSED,
});

export const fetchSingle = id => (dispatch) => {
  requestJson(`/v1/public/characters/${id}`)
    .then(data => dispatch(singleFetched(data.data.results[0])));
};
