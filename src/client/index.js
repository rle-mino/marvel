import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import generateStore from './generateStore';
import initialState from './initialState';
import actions from './actions';
import App from './components/App';

console.log('mounting react app ...');  // eslint-disable-line no-console

const store = generateStore(initialState);

store.dispatch(actions.characters.fetchCharacters());

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(Root, document.getElementById('__MARVEL__'));
