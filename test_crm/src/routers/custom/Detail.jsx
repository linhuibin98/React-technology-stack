import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Detail extends Component {
  static propTypes = {
    prop: PropTypes
  }

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
