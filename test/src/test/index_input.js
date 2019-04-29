import React from 'react';
import ReactDom from 'react-dom';
import propTypes from 'prop-types';

const root = document.querySelector('#root');

// 基于表单元素的 onChange 方法实现 MVVM 数据视图 的双向绑定
class InputView extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '你好啊...'
    }
    return;
  }

  render() {
    return <section>
      <input type="text" value={this.state.content} onChange={(e) => { this.setState({content: e.target.value})}}></input>
      <p>{this.state.content}</p>
    </section>
  }
}


ReactDom.render(<InputView></InputView>, root);