import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap';

import { } from '../actions/actions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: this.props.activeUser,
    }
    // this.onChangeStatus = this.onChangeStatus.bind(this)
    // this.onChangeCount = this.onChangeCount.bind(this)
  }

// Main render method
  render() {
    return (
      <div className="app">
        <h2 className="header">Neuro-Usability Project</h2>
        <h4 className="subHeader">To start a new session please register a new user or privide an existing user</h4>
        <Form className="inputForm">
          <FormGroup id="input">
            <FormControl id="inputField" autoFocus type="id" placeholder="Id" />
            <FormControl id="inputField" type="username" placeholder="Username" />
          </FormGroup>
          <Button id="submit" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

App.propTypes = {
  activeUser: PropTypes.bool,
}

const mapStateToProps = (state, _ownProps) => {
  const activeUser = state.user.id !== null ? true : false;
  return {
    activeUser,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  // onSubmitChangeTestingStatus: (bool) => {
  //   dispatch(testing(bool))
  // },
  // onSubmitButtonClickToBackend: (id, count) => {
  //   dispatch(setTest(id, count))
  // },
});

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
