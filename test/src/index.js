import React from 'react';
import ReactDom from 'react-dom';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner.js'

const root = document.querySelector('#root');

ReactDom.render(<Banner></Banner>, root);



