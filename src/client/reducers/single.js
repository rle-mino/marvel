import { SINGLE_FETCHED, SINGLE_CLOSED } from '../actions/single';

const single = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_FETCHED:
      return action.payload;
    case SINGLE_CLOSED:
      return {};
    default:
      return state;
  }
};

export default single;
