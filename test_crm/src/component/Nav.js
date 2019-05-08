import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

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
              <NavLink to='/' exact>首页</NavLink>
            </li>
            <li>
              <NavLink to='/custom'>客户管理</NavLink>
            </li>
            <li>
              <NavLink to='/plan'>计划管理</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(Nav);

