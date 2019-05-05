import React, { Component } from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

class TodoFooter extends Component {
  render() {
    return (
      <div className='panel-footer'>
        <ul className='nav nav-pills'>
          <li className='presentation active'>
            <a href='javascript:void(0)'>全部</a>
          </li>
          <li className='presentation'><a href='javascript:void(0)'>已完成</a></li>
          <li className='presentation'><a href='javascript:void(0)'>未完成</a></li>
        </ul>
      </div>
    )
  }
}

export default connect(state => ({...state.todo}), action.todo)(TodoFooter);
