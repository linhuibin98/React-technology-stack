import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className='navbar navbar-default'>
        {/* LOGO */} 
        <div className='container-fluid col-md-2'>
          <Link className='navbar-brand' to='/'>CRM管理系统</Link>
        </div>
        {/* NAV */}
        <div className='collapse navbar-collapse col-md-10'>
          <ul className='nav navbar-nav'>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/custom'>客户管理</Link>
            </li>
            <li>
              <Link to='/plan'>计划管理</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(Nav);

