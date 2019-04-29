import React from 'react';
import ReactDom, {render} from 'react-dom';

let root = document.querySelector('#root');
// 数据驱动视图


// 函数式组件

/*
function GetTime() {
  return <section>
    <div>当前时间为：</div>
    <span style={{color: 'red', fontWeight: 'bold'}}>{new Date().toLocaleString()}</span>
  </section>
}

setInterval(() => {
  render(<GetTime></GetTime>, root);
}, 1000);
*/

//创建 类 式组件
class GetTime extends React.Component {
  constructor(props) {
    super(props);
    //初始化组件的状态，都是对象类型
    this.state = {
      time: new Date().toLocaleString()
    }
    return;
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }

  
  render() {
    return <section>
      <div>当前时间：</div>
      <span style={{color: 'red', fontWeight: 'bold'}}>{this.state.time}</span>
    </section>
  }
};

render(<GetTime></GetTime>, root);
