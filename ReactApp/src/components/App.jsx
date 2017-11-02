import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap';

import { addUserToDb } from '../actions/actions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: this.props.activeUser,
    }
    this.onSubmitForm = this.onSubmitForm.bind(this)
    // this.onChangeCount = this.onChangeCount.bind(this)
  }

  onSubmitForm(e) {
    e.preventDefault();
    const id = this.inputId.value;
    const name = this.inputName.value;
    this.props.onSubmitNewUser(id, name);
  }

// Main render method
  render() {
    return (
      <div className="app">
        <h2 className="header">Neuro-Usability Project</h2>
        <h4 className="subHeader">To start a new session please register a new user or privide an existing user</h4>
        <Form
          className="inputForm"
          onSubmit={this.onSubmitForm}
        >
          <FormGroup id="input">
            <FormControl inputRef={ref => { this.inputId = ref; }} id="inputField" autoFocus type="id" placeholder="Id" />
            <FormControl inputRef={ref => { this.inputName = ref; }} id="inputField" type="username" placeholder="Username" />
          </FormGroup>
          <Button
            // id="submit"
            type="submit"
          >
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
  onSubmitNewUser: (id, name) => {
    dispatch(addUserToDb(id, name))
  },
});

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
