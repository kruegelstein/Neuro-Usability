import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { testing, setTest } from '../actions/actions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: this.props.testing,
      count: this.props.count
    }
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.onChangeCount = this.onChangeCount.bind(this)
  }

  onChangeStatus() {
    const status = this.props.testing;
    this.props.onSubmitChangeTestingStatus(!status)
  }

  onChangeCount() {
    const id = 1;
    this.props.onSubmitButtonClickToBackend(id, this.props.count)
  }

// Main render method
  render() {
    const testStatus = this.props.testing === true ? 'true' : 'false'
    return (
      <div className="app">
        <h2>Hello World</h2>
        <h2>This is a Test: {testStatus}</h2>
        <Button
          className="statusButton"
          onClick={this.onChangeStatus}
        >
          Click me to change test status
        </Button>
        <Button
          className="statusButton"
          onClick={this.onChangeCount}
        >
          Click me to increase click-count in backend
        </Button>
        <div>current count: {this.props.count}</div>
      </div>
    )
  }
}

App.propTypes = {
  testing: PropTypes.bool,
  count: PropTypes.number
}

const mapStateToProps = (state, _ownProps) => {
  const testing = state.test.testing;
  const count = state.test.count;
  return {
    testing,
    count,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSubmitChangeTestingStatus: (bool) => {
    dispatch(testing(bool))
  },
  onSubmitButtonClickToBackend: (id, count) => {
    dispatch(setTest(id, count))
  },
});

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
