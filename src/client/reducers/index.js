import { combineReducers } from 'redux';
import characters from './characters';
import single from './single';

export default combineReducers({
  characters,
  single,
});
