import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap';

import { addUserToForm, changeFormValue, selectGood, selectBad1, selectBad2 } from '../actions/actions.js';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: this.props.activeUser,
    }
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.selectGood = this.selectGood.bind(this)
    this.selectBad1 = this.selectBad1.bind(this)
    this.selectBad2 = this.selectBad2.bind(this)
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

  selectGood() {
    this.props.onSelectGood()
  }

  selectBad1() {
    this.props.onSelectBad1()
  }

  selectBad2() {
    this.props.onSelectBad1()
  }

// Main render method
  render() {
    return (
      <div className="intro">
        <h2 className="header">Find the letters</h2>
        <h4 className="subHeader">To start a new session please register a new user and select a level</h4>
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
        </Form>
        <div className="selectionLevel">
          <a className="level" onClick={this.selectGood}>
            <i id="good" className="fa fa-smile-o fa-3" aria-hidden="true"></i>
          </a>
          <a className="level" onClick={this.selectBad1}>
            <i id="bad1" className="fa fa-meh-o fa-3" aria-hidden="true"></i>
          </a>
          <a className="level" onClick={this.selectBad2}>
            <i id="bad2" className="fa fa-frown-o fa-3" aria-hidden="true"></i>
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
  onSubmitNewUser: (id, name) => {
    dispatch(addUserToForm(id, name))
  },
  onChangeFormValue: (field, value) => {
    dispatch(changeFormValue(field, value))
  },
  onSelectGood: () => {
    dispatch(selectGood())
  },
  onSelectBad1: () => {
    dispatch(selectBad1())
  },
  onSelectBad2: () => {
    dispatch(selectBad2())
  },
});

Intro = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Intro);

export default Intro;
