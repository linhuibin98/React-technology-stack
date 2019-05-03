import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './Banner.js'
import {createStore} from 'redux';

const root = document.querySelector('#root');


// redux
/**
 * 1. 创建容器 Redux.createState(reducer)
 * @param  reducer作用： 1. 记录所有状态的修改信息。2. 修改容器中的状态信息 
 *     reducer参数： state：容器中原有的状态信息
 *                   action：dispatch任务派发时的行为对象
 */

const reducer = (state = {s: 0, r: 0}, action) => {
  switch (action.type) {
    case 'suport':
      state = {...state, s: state.s + 1};
      return state;
    case 'reject':
      state = {...state, r: state.r + 1};
      return state;
    default:
      return state;
  }
}

let store = createStore(reducer);
//store中常用的三个方法
/**
 * getState() 获取最新的状态管理信息
 * dispatch() 派发行为
 * subscribe() 事件池追加方法
 */

ReactDom.render(<Banner store={store}></Banner>, root);



