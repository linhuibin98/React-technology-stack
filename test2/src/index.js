import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import Vote from './view/Vote.jsx'

const root = document.querySelector('#root');



ReactDom.render((
  <div>
    <Vote store={store}></Vote>
  </div>
), root);



