import React from 'react';
import PropTypes from 'prop-types';

class Head extends React.Component {
  static contextTypes = {
    title: PropTypes.string
  }
  constructor(props) {
    super();
  }
  render() {
    let {title} = this.context;
    return <div className='panel-heading'>
      {title}
    </div>
  }
}

class PanelBody extends React.Component {
  static contextTypes = {
    s: PropTypes.number,
    r: PropTypes.number
  }
  constructor(props) {
    super();
  }
  render() {
    let {s, r} = this.context;
    return <div className='panel-body'>
      <div>支持人数：<span style={{color: 'red'}}>{s}</span></div>
      <div>反对人数：<span style={{color: 'red'}}>{r}</span></div>
    </div>
  }
}

class PanelFooter extends React.Component {
  static contextTypes = {
    s: PropTypes.number,
    r: PropTypes.number,
    fn: PropTypes.func
  }
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    let {fn} = this.context;
    return <div className='panel-footer'>
      <button className='btn btn-success' style={{marginRight: '20px'}} onClick={() => {fn('suport')}}>支持</button>
      <button className='btn btn-danger' onClick={() => {fn()}}>反对</button>
    </div>
  }
}

class Banner extends React.Component {
  static childContextTypes = {
    title: PropTypes.string,
    s: PropTypes.number,
    r: PropTypes.number,
    fn: PropTypes.func
  }
  getChildContext() {
    let {s, r} = this.state;
    return {
      title: '巴西 VS 德国, 德国战车必胜！！！',
      s,
      r,
      fn: (type) => {
        if (type === 'suport') {
          this.setState({s: this.state.s + 1});
          return;
        }
        this.setState({r: this.state.r + 1});
      }
    }
  }
  constructor(props) {
    super();
    this.state = {
      s: 0,
      r: 0
    }
  }

  render() {
    return <section className='panel panel-default' style={{width: '50%'}}>
        <Head></Head>
        <PanelBody></PanelBody>
        <PanelFooter></PanelFooter>
    </section>
  }
}

export default Banner;