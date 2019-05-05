import React, { Component } from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

class TodoBody extends Component {
  render() {
    return (
      <div className='panel-body'>
        <ul className='list-group'>
          <li className='list-group-item'>
            <input type='checkbox' />
            <span className='rask-name'>打豆豆</span>
            <a href="javascript:void(0)" style={{background: 'red', color: '#fff', fontSize: '12px'}}>删</a>
          </li>
          <li className='list-group-item'>
            <input type='checkbox' />
            <span className='rask-name complete'>睡觉</span>
            <a href="javascript:void(0)" style={{background: 'red', color: '#fff', fontSize: '12px'}}>删</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(state => ({...state.todo}), action.todo)(TodoBody);
