import React, { Component } from 'react'

export default class VoteHead extends Component {
  render() {
    let {title} = this.props;
    return (
      <div className='panel-heading'>
        {title}
      </div>
    )
  }
}
