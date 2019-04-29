import React from 'react';
import ReactDom, {render} from 'react-dom';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.querySelector('#root');

class Vote extends React.Component {
  constructor() {
    super();
    this.state = { // 数据驱动视图
      m: 0,
      n: 0
    }

    return;
  }

  render() {
    let {children} = this.props;
    let {m, n} = this.state;
    let vot = (m+n) ? ((m / (m + n) * 100).toFixed(2) + '%') : '0.00%';
    return <section className='panel panel-default' style={{width: '40%', margin: '20px auto'}}>
      <div className='panel-heading'>世界杯投票</div>
      <div className='panel-body'>
        {children}
        <div>支持人数：<span style={{fontWeight: 'bold', color: 'red'}}>{m}</span></div>
        <div>反对人数：<span style={{fontWeight: 'bold', color: 'red'}}>{n}</span></div>
        <div>支持率：<span style={{fontWeight: 'bold', color: 'red'}}>{vot}</span></div>
      </div>
      <div className='panel-footer'>
        <button className='btn btn-danger' style={{marginRight: '20px'}} onClick={this.supper}>支持</button>
        <button className='btn btn-danger' onClick={this.reject}>反对</button>
      </div>
    </section>
  }

  supper = (e) => {
    this.setState({
      m: this.state.m + 1
    })
  }

  reject = (e) => {
    this.setState({
      n: this.state.n + 1
    })
  }
}

render(<div>
    <Vote>
      <div className='title' style={{color: 'red', fontSize: '20px', fontWeight: 'bold'}}>西班牙 VS 巴西</div>
      
    </Vote>
  </div>, root)