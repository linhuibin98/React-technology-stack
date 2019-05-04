import React, { Component } from 'react'

export default class VoteBody extends Component {
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
  

  render() {
    let {s, r} = this.state;
    return (
      <div className='panel-body'>
        <div>支持 <span style={{color: 'red', fontWeight: 'bold'}}>{s}</span></div>
        <div>反对 <span style={{color: 'red', fontWeight: 'bold'}}>{r}</span></div>
      </div>
    )
  }
}
