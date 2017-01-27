import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

export default initialState => createStore(
  reducers,
  initialState,
  applyMiddleware(
    createLogger(),
    thunkMiddleware,
  ),
);
