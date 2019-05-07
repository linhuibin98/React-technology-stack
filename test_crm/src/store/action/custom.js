import * as types from '../action-types';

let custom = {
  add() {
    return {
      type: types.CUSTOM_ADD
    }
  }
}

export default custom;