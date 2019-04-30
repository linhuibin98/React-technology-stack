import React from 'react';
import ReactDom from 'react-dom';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

const root = document.querySelector('#root');

// 复合组件的信息传递
/**
 * 父组件把信息传递给子组件：
 *    通过属性传递给子组件,触发钩子函数 componentWillReceiveProps;
 * 
 * 子组件修改父组件：
 *    父组件传递给子组件一个方法，在子组件中执行，可以操作父组件中的属性
 */



class PanelHead extends React.Component {
  constructor() {
    super();

    return;
  }

  render() {
    return <div className='panel-heading'>
      组件间的通信
    </div>
  }
}

class PanelBody extends React.Component {
  constructor() {
    super();

    return;
  }

  render() {
    let {n} = this.props;
    return <div className='panel-body' style={{textAlign: 'center', color: 'red', fontSize: '50px', lineHeight: '50px'}}>
      {n}
    </div>
  }
}

class PanelFooter extends React.Component {
  constructor() {
    super();

    return;
  }

  render() {
    let {fn} = this.props;
    return <div className='panel-footer'>
      <button onClick={fn}>点我+1</button>
    </div>
  }
}


class Panel extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 1
    }
    return;
  }

  render() {
    return <section className='panel panel-default' style={{width: '50%', margin: '50px auto'}}>
      <PanelHead></PanelHead>
      <PanelBody n={this.state.n}></PanelBody>
      <PanelFooter fn={this.fn}></PanelFooter>
    </section>
  }

  fn = () => {
    this.setState({
      n: this.state.n + 1
    })
  }

}

ReactDom.render(<Panel></Panel>, root);


