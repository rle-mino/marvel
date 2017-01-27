import requestJson from '../requestJson';

export const CHARACTERS_FETCHED = 'CHARACTERS_FETCHED';

export const charactersFeched = characters => ({
  type: CHARACTERS_FETCHED,
  payload: characters,
});

export const fetchCharacters = () => (dispatch) => {
  requestJson('/v1/public/characters')
    .then(data => dispatch(charactersFeched(data.data.results)));
};
