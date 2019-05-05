import * as types from '../action-types';

let todo = {
  add(payload) {
    return {
      type: types.TODO_ADD,
      payload
    }
  }
};

export default todo;