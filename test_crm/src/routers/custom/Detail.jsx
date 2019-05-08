import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Detail extends Component {

  render() {
    return (
      <div>
        编号：1
        <br />
        姓名：xxx
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
