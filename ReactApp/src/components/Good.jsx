import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { alphabetGood } from '../constants/alphabet.js';

import { selectLetter, selectRating, saveTime } from '../actions/actions.js';

let timeStampGoodStart
let timeStampGoodEnd

class Good extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    timeStampGoodStart = Date.now()
  }

  onSubmit() {
    timeStampGoodEnd = Date.now()
    const timeDiff = (timeStampGoodEnd - timeStampGoodStart) / 1000
    this.props.onSaveTime(timeDiff)
    this.props.goToRating()
  }

  handleClick(event, index) {
    const letter = alphabetGood[index]
    this.props.onSelectLetter(letter)
  }

// Main render method
  render() {
    const selectedLetters = this.props.selectedLetters
    return (
      <div className="good">
        <h4 className="header-good">Find all K</h4>
        <div className="alphabet-box-good">
          {alphabetGood
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
  goToRating: () => {
    dispatch(selectRating())
  },
  onSaveTime: (time) => {
    dispatch(saveTime(time))
  }
});

Good = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Good);

export default Good;
