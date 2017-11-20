import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { alphabet } from '../constants/alphabet.js';

import { selectLetter, submitResultsBad2, selectIntro } from '../actions/actions.js';

const doubleAlphabet = alphabet.concat(alphabet);

const alphabetX4 = doubleAlphabet.concat(doubleAlphabet);

const alphabetX8 = alphabetX4.concat(alphabetX4);

class Bad2 extends Component {
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
    const letter = alphabetX8[index]
    this.props.onSelectLetter(letter)
  }

// Main render method
  render() {
    const selectedLetters = this.props.selectedLetters
    return (
      <div className="bad2">
        <h4 className="header-bad2">Find all K</h4>
        <div className="alphabet-box-bad2">
          {alphabetX8
            .map((letter, index) =>
              <a key={index} className="letter-container-bad2" onClick={event => this.handleClick(event, index)}>
                <p className="letter-bad2">
                  {letter}
                </p>
              </a>
            )
          }
        </div>
        <div className="button-container-bad2">
          <Button bsSize="large" className="submitButton-bad2" onClick={this.onSubmit}>Submit</Button>
        </div>
      </div>
    )
  }
}

Bad2.propTypes = {
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
    dispatch(submitResultsBad2(id, name, letters))
  },
  goToIntro: () => {
    dispatch(selectIntro())
  }
});

Bad2 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bad2);

export default Bad2;
