import * as types from '../action-types';

export default function reducer(state = {data: [], flag: 'all'}, action) {
  switch(action.type) { 
    case types.TODO_ADD:
      let {payload} = action; 
      payload.id = state.data.length === 0 ? 1 : state.data[state.data.length - 1].id + 1;
      state.data.push(payload);
      break; 
    default: 
      break;
  }
  return state;
}