import { CHARACTERS_FETCHED } from '../actions/characters';

const characters = (state = [], action) => {
  switch (action.type) {
    case CHARACTERS_FETCHED:
        return action.payload;
    default:
      return state;
  }
}

export default characters;
