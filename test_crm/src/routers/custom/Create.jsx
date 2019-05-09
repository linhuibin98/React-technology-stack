import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from '../../store/action';

export class Create extends Component {
  
  render() {
    return (
      <div className='col-md-3'>
          <div className="form-group">
            <label>用户编号</label>
            <input type="text" className="form-control" id="exampleInputEmail3" placeholder="id"  ref='user_id'/>
          </div>
          <div className="form-group">
            <label>用户姓名</label>
            <input type="text" className="form-control" id="exampleInputPassword3" placeholder="username" ref='user_name'/>
          </div>
          <button className="btn btn-warning" onClick={this.create}>添加</button>
      </div>
    )
  }

  create = () => {
    let id = parseFloat(this.refs.user_id.value);
    let name = this.refs.user_name.value;
    this.props.add({
      id,
      name
    });
    this.props.history.push('/custom/list');
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, action.custom)(Create);
