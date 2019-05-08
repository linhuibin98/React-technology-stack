import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Create extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='col-md-3'>
        <form className="form-block">
          <div className="form-group">
            <label htmlFor="exampleInputEmail3">用户编号</label>
            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="id" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword3">用户姓名</label>
            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="username" />
          </div>
          <button className="btn btn-warning">添加</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
