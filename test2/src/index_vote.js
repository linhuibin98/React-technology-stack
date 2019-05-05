import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import Vote from './view/Vote.jsx'

const root = document.querySelector('#root');



ReactDom.render((
  <Provider store={store}>
    <div>
      <Vote></Vote>
    </div>
  </Provider>
), root);



