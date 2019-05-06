import React, { Component } from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

class TodoBody extends Component {
  render() {
    let {data, flag} = this.props;
    data = data.filter(item => {
      if (flag === 'complete') {
        return parseFloat(item.state) === 1;
      } else if (flag === 'uncomplete') {
        return parseFloat(item.state) === 0;
      }
      return true;
    })
    return (
      <div className='panel-body'>
        <ul className='list-group'>
          {
            data.map((item, index) => {
              let {name, state, id} = item,
                  flag = false,
                  clasName = 'rask-name';
              if (parseFloat(state) === 1) {
                flag = true;
                clasName = 'rask-name complete'
              }
              
              return (
                <li className='list-group-item' key={index}>
                  <input type='checkbox' checked={flag} onChange={
                    ev => {
                      let newState = ev.target.checked ? 1 : 0;
                      this.props.updateState({
                        id,
                        newState
                      });
                    }
                  } />
                  <span className={clasName}>{name}</span>
                  <a href="javascript:void(0)" style={{background: 'red', color: '#fff', fontSize: '12px'}}>删</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(state => ({...state.todo}), action.todo)(TodoBody);
