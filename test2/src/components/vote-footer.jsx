import React, { Component } from 'react'

export default class VoteFooter extends Component {
  render() {
    let {store: {dispatch}} = this.props;
    return (
      <div className='panel-footer'>
        <button className='btn btn-success' style={{marginRight: '20px'}} onClick={() => {
          dispatch({
            type: 'support'
          })
        }}>支持</button>
        <button className='btn btn-danger' onClick={() => {
          dispatch({
            type: 'reject'
          })
        }}>反对</button>
      </div>
    )
  }
}
