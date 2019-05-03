/**
 * 工程化结构
 * - store
 *    index.js   //创建store(Redux.createStore(reducer));
 *    action-types.js  //所有任务的行为标识都在这里进行宏观管理
 *    - reducer  
 *       index.js  //把每个模块的reducer合并成一个reducer
 *    - action
 *       index.js  //存放每一个模块需要进行的派发任务（actionCreater）
 *     
 * 
 */
import {createStore} from 'redux';
import reducer from './reducer';

let store = createStore(reducer);
export default store;