import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Bad2 extends Component {

// Main render method
  render() {
    return (
      <div className="app">
        I am the second bad page
      </div>
    )
  }
}

Bad2.propTypes = {
}

const mapStateToProps = (state, _ownProps) => {
  return {
  };
};

Bad2 = connect(
  mapStateToProps,
  null,
)(Bad2);

export default Bad2;
