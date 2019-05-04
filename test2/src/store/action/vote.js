import * as types from '../action-types';
let vote = {
  support() {
    return {
      type: types.VOTE_SUPPORT
    }
  },
  reject() {
    return {
      type: types.VOTE_REJECT
    }
  }
}

export default vote;