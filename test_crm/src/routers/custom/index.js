import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import  List  from './List.jsx';
import { Create } from './Create.jsx';
import { Detail } from './Detail.jsx';

export class Custom extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
      {/* 左侧导航栏 */}
        <ul className='nav nav-pills nav-stacked col-md-2'>
          <li className='presentation'><Link to='/custom/list'>客户列表</Link></li>
          <li className='presentation'><Link to='/custom/create'>增加客户</Link></li>
        </ul>
      {/* 右侧展示内容 */}
        <div className='col-md-10'>
          <Switch>
            <Route path='/custom/list' component={List} />
            <Route path='/custom/create' component={Create} />
            <Route path='/custom/detail' component={Detail} />
            <Redirect from='/custom' to='/custom/list' />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom)

