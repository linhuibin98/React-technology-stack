import * as types from '../action-types';

let todo = {
  add(payload) {
    return {
      type: types.TODO_ADD,
      payload
    }
  },
  toggleTab(flag) {
    return {
      type: types.TODO_TAB,
      flag
    }
  },
  updateState(newState) {
    return {
      type: types.TODO_UPDATE_STATE,
      newState
    }
  },
  removeState(current) {
    return {
      type: types.TODO_REMOVE_STATE,
      current
    }
  }
};

export default todo;