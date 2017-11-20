import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { alphabet } from '../constants/alphabet.js';

import { selectLetter, submitResultsBad1, selectIntro } from '../actions/actions.js';

const doubleAlphabet = alphabet.concat(alphabet);

const alphabetX4 = doubleAlphabet.concat(doubleAlphabet);

const alphabetX8 = alphabetX4.concat(alphabetX4);

class Bad1 extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    const id = this.props.id
    const name = this.props.name
    const letters = this.props.selectedLetters
    this.props.onSubmitResults(id, name, letters)
    this.props.goToIntro()
  }

  handleClick(event, index) {
    alert(`You selected ${alphabetX8[index]}`)
    const letter = alphabetX8[index]
    this.props.onSelectLetter(letter)
  }

// Main render method
  render() {
    const selectedLetters = this.props.selectedLetters
    return (
      <div className="bad1">
        <h4 className="header-bad1">Find all K</h4>
        <div className="alphabet-box-bad1">
          {alphabetX8
            .map((letter, index) =>
              <a key={index} className="letter-container-bad1" onClick={event => this.handleClick(event, index)}>
                <p className="letter-bad1">
                  {letter}
                </p>
              </a>
            )
          }
        </div>
        <div className="button-container-bad1">
          <Button bsSize="large" className="submitButton-bad1" onClick={this.onSubmit}>Submit</Button>
        </div>
      </div>
    )
  }
}

Bad1.propTypes = {
}

const mapStateToProps = (state, _ownProps) => {
  const id = state.form.id
  const name = state.form.name
  const selectedLetters = state.form.selectedLetters
  return {
    selectedLetters,
    id,
    name,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSelectLetter: (letter) => {
    dispatch(selectLetter(letter))
  },
  onSubmitResults: (id, name, letters) => {
    dispatch(submitResultsBad1(id, name, letters))
  },
  goToIntro: () => {
    dispatch(selectIntro())
  }
});

Bad1 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bad1);

export default Bad1;
