import React, { Component } from 'react';
import {connect} from 'react-redux';

class Nav extends Component {
  render() {
    return (
      <div className='navbar navbar-default'>
        {/* LOGO */} 
        <div className='container-fluid col-md-2'>
          <a className='navbar-brand' herf='javascrip:void(0)'>CRM管理系统</a>
        </div>
        {/* NAV */}
        <div className='collapse navbar-collapse col-md-10'>
          <ul className='nav navbar-nav'>
            <li>
              <a herf='javascript:void(0)'>首页</a>
            </li>
            <li>
              <a herf='javascript:void(0)'>客户管理</a>
            </li>
            <li>
              <a herf='javascript:void(0)'>计划管理</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(Nav);

