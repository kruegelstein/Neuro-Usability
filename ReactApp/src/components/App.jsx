import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap';

import { addUserToDb, changeFormValue } from '../actions/actions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: this.props.activeUser,
    }
    this.onSubmitForm = this.onSubmitForm.bind(this)
    // this.validInput = this.validInput.bind(this)
  }

  onSubmitForm(e) {
    e.preventDefault();
    const id = this.props.id;
    const name = this.props.name;
    this.props.onSubmitNewUser(id, name);
  }

  handleChange(e) {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    this.props.onChangeFormValue(fieldName, fieldVal);
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
            <FormControl
              name="id"
              onChange={this.handleChange.bind(this)}
              value={this.props.id}
              id="inputField"
              autoFocus
              type="number"
              placeholder="Id"
            />
            <FormControl
              name="name"
              onChange={this.handleChange.bind(this)}
              value={this.props.name}
              id="inputField"
              type="username"
              placeholder="Username" />
          </FormGroup>
          <Button
            id="submit"
            type="submit"
            disabled={this.props.isValidFormInput}
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
  isValidFormInput: PropTypes.bool,
}

const mapStateToProps = (state, _ownProps) => {
  const activeUser = state.user.id !== null ? true : false;
  const isValidFormInput = state.form.id === null && state.form.name === null ? true : false;
  const id = state.form.id;
  const name = state.form.name;
  return {
    id,
    name,
    activeUser,
    isValidFormInput,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSubmitNewUser: (id, name) => {
    dispatch(addUserToDb(id, name))
  },
  onChangeFormValue: (field, value) => {
    dispatch(changeFormValue(field, value))
  }
});

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
