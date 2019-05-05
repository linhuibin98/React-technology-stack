import {combineReducers} from 'redux';
import vote from './vote';
import todo from './todo';

const reducer = combineReducers({
  vote,
  todo
});

export default reducer;