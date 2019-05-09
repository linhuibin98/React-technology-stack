import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Detail extends Component {

  render() {
    let {data, match: { params }} = this.props;
    let item = data.filter(item => {
        return parseFloat(item.id) === parseFloat(params.id);
    })[0];
    let { id, name } = item;
    return (
      <div className='col-md-3'>
        <h3>用户信息修改</h3>
        <div className="form-group">
          <label>用户编号</label>
          <input type="text" className="form-control" id="exampleInputEmail3" placeholder="id"  ref='user_id' defaultValue={ id }/>
        </div>
        <div className="form-group">
          <label>用户姓名</label>
          <input type="text" className="form-control" id="exampleInputPassword3" placeholder="username" ref='user_name' defaultValue={ name }/>
        </div>
        <button className="btn btn-warning">修改</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.custom
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
