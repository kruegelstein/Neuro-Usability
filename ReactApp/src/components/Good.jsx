import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Good extends Component {

// Main render method
  render() {
    return (
      <div className="app">
        I am the good page
      </div>
    )
  }
}

Good.propTypes = {
}

const mapStateToProps = (state, _ownProps) => {
  return {
  };
};

Good = connect(
  mapStateToProps,
  null,
)(Good);

export default Good;
