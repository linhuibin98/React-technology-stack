import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from '../../store/action';

export class List extends Component {

  render() {
    let {data} = this.props;
    return (
      <div>
        <ul className='list-group'>
          {
            data.map((item, index) => {
              let {id, name} = item;
              return (
                <li className='list-group-item' key={ index } onClick={ this.getUserInfo } userid={ id }>编号：<span>{ id }</span>  姓名：<span>{ name }</span></li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  getUserInfo = (ev) => {
    let userId = ev.target.getAttribute('userid');
    this.props.history.push(`/custom/detail/${userId}`);
  }
}

const mapStateToProps = (state) => ({
  ...state.custom
})

const mapDispatchToProps = {
  ...action.custom
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
