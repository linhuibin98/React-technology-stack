import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from '../store/action';

class VoteFooter extends Component {
  
  render() {
    let {support, reject} = this.props;
    return (
      <div className='panel-footer'>
        <button className='btn btn-success' style={{marginRight: '20px'}} onClick={() => {
          support();
        }}>支持</button>
        <button className='btn btn-danger' onClick={() => {
          reject();
        }}>反对</button>
      </div>
    )
  }
}

// let mapStateToProps = state => {
//   return {

//   };
// }
/*
let mapDispatchToProps = dispatch => {
  //=>dispatch:STORE中存储的DISPATCH方法
//=>返回的是啥，就相当于把特挂载到组件的属性上（一般我们挂载一些方法，这些方法中完成了DISPATCH派发在务操作）
  return {
    support() {
      dispatch(action.vote.support());
    },
    reject() {
      dispatch(action.vote.reject());
    }
  };
}
*/

export default connect(state => ({...state}), action.vote)(VoteFooter);