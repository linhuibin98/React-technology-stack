import React, { Component } from 'react';
import {connect} from 'react-redux';
import action from  '../../store/action'

class TodoHead extends Component {
  render() {
    console.log(this.props);
    let {data} = this.props;
    let len = data.filter( item => item.state === 0).length;
    return (
      <div className='panel-heading'>
        <h3 className='panel-title'><span className='task-title'>任务列表</span> [ 当前未完成任务<span className='count'> {data.length}</span> ]</h3>
        <input type='text' className='form-control' placeholder='添加任务的任务名' onKeyUp={this.keyUp}/>
      </div>
    )
  }

  keyUp = ev => {
    //enter
    if (ev.keyCode === 13) {
      let value = ev.target.value.trim();
      this.props.add({
        name: value,
        state: 0  // 添加后，默认为未完成
      });
    }
  }
}

export default connect(state => ({...state.todo}), action.todo)(TodoHead);
