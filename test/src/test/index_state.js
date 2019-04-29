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
  // componentDidMount 生命周期函数，组件初次渲染完成后执行
  componentDidMount() { 
    /**
     * 1. 修改组件的状态：会用我们传递的对象和初始化的state进行匹配，只把我们传递的属性进行修改，没有传递的依然保留原始的状态信息
     * 2. 当前状态修改完成，会通知react把组件JSX中的部分元素进行重新渲染
     * 
     */
    setInterval(() => {
      // setState是异步操作
      this.setState({
        time: new Date().toLocaleString()
      }, () => {
        // 回调函数，当通知react把需要渲染的JSX元素渲染完成后，执行的回调操作
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