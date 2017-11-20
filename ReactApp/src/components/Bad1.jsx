import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Bad1 extends Component {

// Main render method
  render() {
    return (
      <div className="app">
        I am the first bad page
      </div>
    )
  }
}

Bad1.propTypes = {
}

const mapStateToProps = (state, _ownProps) => {
  return {
  };
};

Bad1 = connect(
  mapStateToProps,
  null,
)(Bad1);

export default Bad1;
