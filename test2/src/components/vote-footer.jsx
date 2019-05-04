import React, { Component } from 'react';
import action from '../store/action';

export default class VoteFooter extends Component {
  render() {
    let {store: {dispatch}} = this.props;
    return (
      <div className='panel-footer'>
        <button className='btn btn-success' style={{marginRight: '20px'}} onClick={() => {
          dispatch(action.vote.suppot());
        }}>支持</button>
        <button className='btn btn-danger' onClick={() => {
          dispatch(action.vote.reject());
        }}>反对</button>
      </div>
    )
  }
}
