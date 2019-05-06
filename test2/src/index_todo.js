import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import Todo from './view/todo';
import './static/index.less';

const root = document.querySelector('#root');



ReactDom.render((
  <Provider store={store}>
    <div>
      <Todo></Todo>
    </div>
  </Provider>
), root);