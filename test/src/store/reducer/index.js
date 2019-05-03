import {combineReducers} from 'redux';  // 合并多个reducer
import vote from './vote.js';

const reducer = combineReducers({
  vote
})

export default  reducer;