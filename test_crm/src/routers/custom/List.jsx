import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                <li className='list-group-item' key={ index }>编号：<span>{ id }</span>  姓名：<span>{ name }</span></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.custom
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
