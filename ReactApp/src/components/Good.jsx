import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { alphabet } from '../constants/alphabet.js';

import { selectLetter, submitResultsGood, selectIntro } from '../actions/actions.js';

const doubleAlphabet = alphabet.concat(alphabet);

const tripleAlphabet = doubleAlphabet.concat(alphabet);

class Good extends Component {
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
      <div className="good">
        <h4 className="header-good">Find all K</h4>
        <div className="alphabet-box-good">
          {tripleAlphabet
            .map((letter, index) =>
              <a key={index} className="letter-container" onClick={event => this.handleClick(event, index)}>
                <p className="letter">
                  {letter}
                </p>
              </a>
            )
          }
        </div>
        <div className="result-box-good">
          {this.props.selectedLetters
            .map((l, index) =>
              <div key={index} className="letter-box">
                <p className="selected-letter">{l}</p>
              </div>
            )
          }
        </div>
        <div className="button-container">
          <Button bsSize="large" className="submitButton" onClick={this.onSubmit}>Submit</Button>
        </div>
      </div>
    )
  }
}

Good.propTypes = {
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
    dispatch(submitResultsGood(id, name, letters))
  },
  goToIntro: () => {
    dispatch(selectIntro())
  }
});

Good = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Good);

export default Good;
