import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import A from './components/A';
import B from './components/B';

const root = document.querySelector('#root');

// 使用react 路由实现 SPA

/*
*单页面应用（SPA:single page web application）
*只有一个页面，所有需要展示的内容都在这一个页面中实现切换，WEBPACK中只需要配置一个入口即可（移动端单页面应用居多或者PC端管理系统类也是单页面应用为主）

*多页面应用（MPA:multi page web application）
学一个项目由很多页面组成，使用这个产品，主要就是页面之间的跳转（PC端多页面应用居多）；基
于框架开发的时候，需要在WEBPACK中配置多入口，每一个入口对应一个页面；
*/

/**
 * Switch: 只要有一个路径匹配，就不再往下匹配
 */

 /**
  * Redirect: 重定向 
  * 属性： to=[string] | {pathname, search, state}
  * 
  */

// Route的属性
/**
 * path: 匹配路径
 * component: 匹配渲染的组件
 * render: func  , 当访问路径匹配时，会调用该方法，一般用于“权限校验”（渲染组件之前验证是否存在权限， 做一些特殊处理）
 * strict: 路径匹配严格模式, 请求路径中存在目标匹配路径即匹配
 * exact: 请求路径必须和目标路径完全匹配才能匹配
 */

ReactDom.render((
  <HashRouter>
    <Switch>
      <Route path= '/' exact component={ A } />
      <Route path= '/user' render={() => {
        return '权限不足！！！'
      }} />
    </Switch>
  </HashRouter>
), root);



