import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter, Route} from 'react-router-dom';
import A from './components/A'

const root = document.querySelector('#root');

// 使用react 路由实现 SPA

/*
*单页面应用（SPA:single page web application）
*只有一个页面，所有需要展示的内容都在这一个页面中实现切换，WEBPACK中只需要配置一个入口即可（移动端单页面应用居多或者PC端管理系统类也是单页面应用为主）

*多页面应用（MPA:multi page web application）
学一个项目由很多页面组成，使用这个产品，主要就是页面之间的跳转（PC端多页面应用居多）；基
于框架开发的时候，需要在WEBPACK中配置多入口，每一个入口对应一个页面；
*/


ReactDom.render((
  <HashRouter>
    <div>
      <Route path= '/a' component={ A } />
    </div>
  </HashRouter>
), root);



