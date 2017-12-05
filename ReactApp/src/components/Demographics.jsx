import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap';
import { selectIntro } from '../actions/actions.js';

class Demographics extends Component {
  constructor(props) {
    super(props);
    // this.createRandomLetters = this.createRandomLetters.bind(this)
  }

// Main render method
  render() {
    return (
      <div className="demographics">
        Hello Demographics
      </div>
    )
  }
}

Demographics.propTypes = {
}

// const mapStateToProps = (state, _ownProps) => {
//   return {}
// };

const mapDispatchToProps = (dispatch, _ownProps) => ({
  goToIntro: () => {
    dispatch(selectIntro())
  }
});

Demographics = connect(
  // mapStateToProps,
  mapDispatchToProps,
)(Demographics);

export default Demographics;
