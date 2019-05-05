import React, { Component } from 'react';
import TodoHead from './Head';
import TodoBody from './Body';
import TodoFooter from './Footer';

export default class Todo extends Component {
  render() {
    return (
      <div className='panel panel-default'>
        <TodoHead></TodoHead>
        <TodoBody></TodoBody>
        <TodoFooter></TodoFooter>
      </div>
    )
  }
}