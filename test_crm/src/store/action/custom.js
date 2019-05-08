import * as types from '../action-types';

let custom = {
  add(payload) {
    return {
      type: types.CUSTOM_CREATE,
      payload
    }
  }
}

export default custom;