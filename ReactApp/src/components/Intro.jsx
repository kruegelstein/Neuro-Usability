import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap';

import { addUserToForm, changeFormValue, selectGood, selectBad, selectAdmin, submitUserId } from '../actions/actions.js';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.selectGood = this.selectGood.bind(this)
    this.selectBad = this.selectBad.bind(this)
    this.changeToAdmin = this.changeToAdmin.bind(this)
    this.generateUserId = this.generateUserId.bind(this)
  }

  changeToAdmin() {
    this.props.onSelectAdmin()
  }

  handleChange(e) {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    this.props.onChangeFormValue(fieldName, fieldVal);
  }

  selectGood() {
    this.props.onSelectGood()
  }

  selectBad() {
    this.props.onSelectBad()
  }

  generateUserId(){
    const id = Math.floor(Math.random() * (999 - 0 + 1) + 0)
    this.props.onSubmitUserId(id)
  }

// Main render method
  render() {
    return (
      <div className="intro">
        <h2 className="header-intro">Find the letters</h2>
        <h4 className="subHeader">To start a new session please register a new user and select a level</h4>
        <div className="admin-button-container">
          <Button bsStyle="primary" bsSize="large" className="adminButton" onClick={this.changeToAdmin}>Admin</Button>
        </div>
        <div className="form">
          <div className="id-container">
            <Button className="id-button" bsStyle="primary" onClick={this.generateUserId}>Generate User ID</Button>
            <p className="id-tag">ID: </p>
            <p className="id">{this.props.id}</p>
          </div>
          <Form
            className="inputForm"
            >
              <FormGroup id="input">
                <FormControl
                  name="name"
                  onChange={this.handleChange.bind(this)}
                  value={this.props.name}
                  id="inputField"
                  type="username"
                  placeholder="Username" />
                </FormGroup>
              </Form>
        </div>
        <div className="selectionLevel">
          <a className="level" onClick={this.selectGood}>
            <i id="good" className="fa fa-smile-o fa-3" aria-hidden="true"></i>
          </a>
          <a className="level" onClick={this.selectBad}>
            <i id="bad" className="fa fa-frown-o" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    )
  }
}

Intro.propTypes = {
  isValidFormInput: PropTypes.bool,
}

const mapStateToProps = (state, _ownProps) => {
  const isValidFormInput = state.form.id === null && state.form.name === null ? true : false;
  const id = state.form.id;
  const name = state.form.name;
  return {
    id,
    name,
    isValidFormInput,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onChangeFormValue: (field, value) => {
    dispatch(changeFormValue(field, value))
  },
  onSelectGood: () => {
    dispatch(selectGood())
  },
  onSelectBad: () => {
    dispatch(selectBad())
  },
  onSelectAdmin: () => {
    dispatch(selectAdmin())
  },
  onSubmitUserId: (id) => {
    dispatch(submitUserId(id))
  }
});

Intro = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Intro);

export default Intro;
