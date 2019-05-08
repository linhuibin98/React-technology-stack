import * as types from '../action-types';

export default function reducer(state = {data: [{id: 1, name: '李天'}]}, action) {
  state = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case types.CUSTOM_CREATE: 
      let {payload} = action;
      state.data.push(payload);
      break;
    default: 
      break;
  }
  return state;
}