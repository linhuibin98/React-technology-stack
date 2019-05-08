import React, { Component } from 'react'
import { connect } from 'react-redux'

export class List extends Component {
  render() {
    return (
      <div>
        List
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
