import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoteHead from '../components/Vote-head';
import VoteBody from '../components/Vote-body';
import VoteFooter from '../components/vote-footer';

export default class Vote extends Component {
  static defaultProps = {
    title: '巴西 VS 德国：巴西必胜！！！'
  }

  static propTypes = {
    title: PropTypes.string
  }

  constructor(props) {
    super();
  }

  render() {
    let {store, title} = this.props;
    return (
      <section className='panel panel-default' style={{width: '50%'}}>
        <VoteHead title={title}></VoteHead>
        <VoteBody store={store}></VoteBody>
        <VoteFooter store={store}></VoteFooter>
      </section>
    )
  }
}