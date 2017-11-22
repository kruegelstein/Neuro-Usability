import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { alphabetBad } from '../constants/alphabet.js';

import { selectLetter, selectRating } from '../actions/actions.js';

class Bad extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    this.props.goToRating()
  }

  handleClick(event, index) {
    alert(`You selected ${alphabetX8[index]}`)
    const letter = alphabetBad[index]
    this.props.onSelectLetter(letter)
  }

// Main render method
  render() {
    const selectedLetters = this.props.selectedLetters
    return (
      <div className="bad">
        <h4 className="header-bad">Find all K</h4>
        <div className="alphabet-box-bad">
          {alphabetBad
            .map((letter, index) =>
              <a key={index} className="letter-container-bad" onClick={event => this.handleClick(event, index)}>
                <p className="letter-bad">
                  {letter}
                </p>
              </a>
            )
          }
        </div>
        <div className="button-container-bad">
          <Button bsSize="large" className="submitButton-bad" onClick={this.onSubmit}>Submit</Button>
        </div>
      </div>
    )
  }
}

Bad.propTypes = {
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
  goToRating: () => {
    dispatch(selectRating())
  }
});

Bad = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bad);

export default Bad;
