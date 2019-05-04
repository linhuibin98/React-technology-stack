import React, { Component } from 'react';
import {connect} from 'react-redux';

class VoteBody extends Component {
  /*
  constructor(props) {
    super();
    let {store: {getState}} = props;
    let {s, r} = getState().vote;
    this.state = {
      s,
      r
    }
  }

  componentDidMount() {
    let {store:{getState, subscribe}} = this.props;
    subscribe(() => {
      let {s, r} = getState().vote;
      this.setState({
        s,
        r
      })
    })
  }
  */

  /*
  *相对于传统的REDUX，我们做的步骤优化
  *1.寻出的不在是我们创建的组件，而是基于CONNECT构造后的高阶组件
  *export default connect（Imapstateroprops]，[mapDispatchroProps]）（[自己创建的组件]）
  *2.REACT-REDUX帮我们做了一件非常重要的事情：以前我们需要自己基于sUBSCRIBE向事件池道加方法
    以达到容器状态信息改变，执行我们道加的方法，重新道染组件的目的，但是现在不用了，REACT-REDUX帮我2
    们做了这件事：“所有用到REDUX容器状态信息的组件，都会向事件池中追加一个方法,当状态改变，通知方法执行"
  */
  
  render() {
    let {s, r} = this.props;
    return (
      <div className='panel-body'>
        <div>支持 <span style={{color: 'red', fontWeight: 'bold'}}>{s}</span></div>
        <div>反对 <span style={{color: 'red', fontWeight: 'bold'}}>{r}</span></div>
      </div>
    )
  }
}

let mapStateToProps = state => {  // 把redux中容器中的状态信息遍历，赋值给当前组件的属性props中 (state)
  return {
    ...state.vote
  };
};

let mapDispatchToProps = dispatch => { // 把redux中容器中的dispatch派发任务遍历，赋值给当前组件的属性props中 (actionCreator)
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteBody);
