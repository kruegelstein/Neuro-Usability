import React, { Component } from 'react';

// Styled-Components
import SpinnerComp from './Spinner.js';

export class Spinner extends Component {
  render() {
    if (this.props.enabled) {
      return (
        <SpinnerComp className="spinner" enabled onClick={this.props.countClick}/>
      );
    }
    return (
      <SpinnerComp className="spinner"/>
    );
  }
}

export default Spinner;
