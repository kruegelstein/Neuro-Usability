import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { alphabet } from '../constants/alphabet.js';

import { selectLetter, submitResultsBad1, selectIntro } from '../actions/actions.js';

const doubleAlphabet = alphabet.concat(alphabet);

const tripleAlphabet = doubleAlphabet.concat(alphabet);

class Bad1 extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    // this.selectGood = this.selectGood.bind(this)
    // this.selectBad1 = this.selectBad1.bind(this)
    // this.selectBad2 = this.selectBad2.bind(this)
  }

  onSubmit() {
    const id = this.props.id
    const name = this.props.name
    const letters = this.props.selectedLetters
    this.props.onSubmitResults(id, name, letters)
    this.props.goToIntro()
  }

  handleClick(event, index) {
    const letter = tripleAlphabet[index]
    this.props.onSelectLetter(letter)
  }

// Main render method
  render() {
    const selectedLetters = this.props.selectedLetters
    return (
      <div className="bad1">
        <h4 className="header-bad1">Find all K</h4>
        <div className="alphabet-box-bad1">
          {tripleAlphabet
            .map((letter, index) =>
              <a key={index} className="letter-container-bad1" onClick={event => this.handleClick(event, index)}>
                <p className="letter-bad1">
                  {letter}
                </p>
              </a>
            )
          }
        </div>
        <div className="result-box-bad1">
          {this.props.selectedLetters
            .map((l, index) =>
              <div key={index} className="letter-box-bad1">
                <p className="selected-letter-bad1">{l}</p>
              </div>
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
