import React, { Component } from 'react';
import { connect } from 'react-redux';
import {LocaleProvider, DatePicker} from 'antd';


export class Home extends Component {
  render() {
    return (
      <LocaleProvider>
        <DatePicker />
      </LocaleProvider>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
