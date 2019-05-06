import * as types from '../action-types';

export default function reducer(state = {data: [], flag: 'all'}, action) {
  switch(action.type) { 
    case types.TODO_ADD:
      let {payload} = action; 
      payload.id = state.data.length === 0 ? 1 : state.data[state.data.length - 1].id + 1;
      state.data.push(payload);
      break; 
    case types.TODO_TAB:
      state.flag = action.flag;
      break;
    case types.TODO_UPDATE_STATE:
      let it = state.data.find((item, index) => {
        return item.id === action.newState.id;
      })
      if (it) {
        it.state = action.newState.newState;
      }
      break;
    default: 
      break;
  }
  state = JSON.parse(JSON.stringify(state));
  return state;
}