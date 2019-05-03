import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './Banner.js'
import store from './store';

const root = document.querySelector('#root');



ReactDom.render(<Banner store={store}></Banner>, root);



