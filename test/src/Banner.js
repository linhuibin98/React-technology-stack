import React from 'react';
import PropTypes from 'prop-types';

// 使用context, 在组件中传递属性信息

class Head extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <div className='panel-heading'>
    </div>
  }
}

class PanelBody extends React.Component {
  constructor(props) {
    super(props);
    let {store: {getState}} = props;
    let {s, r} = getState();
    this.state = {s, r};
  }
  render() {
    let {s, r} = this.state;
    return <div className='panel-body'>
      <div>支持人数：<span style={{color: 'red'}}>{s}</span></div>
      <div>反对人数：<span style={{color: 'red'}}>{r}</span></div>
    </div>
  }
  componentDidMount() {
    let {store: {getState, subscribe}} = this.props;
    subscribe(() => { // 添加状态监听，更新最新状态state
      let {s, r} = getState();
      this.setState({
        s,
        r
      })
    })
  }
}

class PanelFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {store: {dispatch}} = this.props;
    return <div className='panel-footer'>
      <button className='btn btn-success' style={{marginRight: '20px'}} onClick={() => {dispatch({type: 'suport'})}}>支持</button>
      <button className='btn btn-danger' onClick={() => {dispatch({type: 'reject'})}}>反对</button>
    </div>
  }
}

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {store} = this.props;
    return <section className='panel panel-default' style={{width: '50%'}}>
        <Head></Head>
        <PanelBody store={store}></PanelBody>
        <PanelFooter store={store}></PanelFooter>
    </section>
  }
}

export default Banner;