import * as types from '../action-types';

export default function reducer(state = {data: [], flag: 'all'}, action) {
  switch(action.type) { 
    case types.TODO_ADD:
      let {payload} = action; 
      payload.id = state.data.length === 0 ? 1 : state.data[state.data.length - 1].id + 1;
      state.data.push(payload);
      break; 
    case types.TODO_TAB:
      state.data = state.data.filter(item => {
        if (action.flag === 'complete') {
          return parseFloat(item.state) === 1;
        } else if (action.flag === 'uncomplete') {
          return parseFloat(item.state) === 0;
        }
      })
      state.flag = action.flag;
      break;
    default: 
      break;
  }
  state = JSON.parse(JSON.stringify(state));
  return state;
}