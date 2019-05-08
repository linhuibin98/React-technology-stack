import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
  render() {
    return (
      <div>
        我是首页
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
