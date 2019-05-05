import React, { Component } from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

class TodoFooter extends Component {
  constructor() {
    super();
    this.showActive = [{
      text: '全部',
      flag: 'all'
    }, {
      text: '已完成',
      flag: 'complete'
    }, {
      text: '未完成',
      flag: 'uncomplete'
    }];
  }
  render() {
    let {flag} = this.props;
    return (
      <div className='panel-footer'>
        <ul className='nav nav-pills' onClick={this.tabToggle}>
          {
            this.showActive.map((item, index) => {
              let {text, flag: itemFlag} = item;
              return (
                <li className={itemFlag === flag ? 'presentation active' : 'presentation'} key={index}>
                  <a href='javascript:void(0)' flag={itemFlag}>{text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  tabToggle = ev => {
    let target = ev.target,
        tarTag = target.tarName;
    // 合并事件源
    if (tarTag === 'LI') {
      target = target.firstElementChild;
      tarTag = target.tarName;
    }
    
    let flg = target.getAttribute('flag');

    let {flag, toggleTab} = this.props;
    if (flg === flag) {
      return;
    } else {
      toggleTab(flg);
    }

  }
}

export default connect(state => ({...state.todo}), action.todo)(TodoFooter);
