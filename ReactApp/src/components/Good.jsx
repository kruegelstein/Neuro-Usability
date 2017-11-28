import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { alphabetGood, alphabetBasic } from '../constants/alphabet.js';

import { selectLetter, selectRating, saveTime, selectRound2, selectRound3 } from '../actions/actions.js';

let timeStampGoodStart
let timeGoodEnd

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
    const round = this.props.round
    this.props.onSaveTime(round, timeDiff)
    if(round === 1) {
      this.props.goToRound2()
    } else if(round === 2) {
      this.props.goToRound3()
    } else if(round === 3) {
      this.props.goToRating()
    }else {
      console.log('rounds are fucked up!')
    }
  }

  handleClick(event, index) {
    const letter = alphabetGood[index]
    const round = this.props.round
    this.props.onSelectLetter(round, letter)
  }

// Main render method
  render() {
    const selectedLetters = this.props.selectedLetters
    const round = this.props.round
    let letterToFind = ''
    if(round === 1) {
      letterToFind = this.props.letter1
    } else if(round === 2) {
      letterToFind = this.props.letter2
    } else if(round === 3){
      letterToFind = this.props.letter3
    } else {
      letterToFind = undefined
    }
    return (
      <div className="good">
        <h4 className="header-good">Find all {letterToFind }</h4>
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
  const round = state.form.round
  let selectedLetters = []
  if(round === 1) {
    selectedLetters = state.form.round1.selectedLetters
  }else if(round === 2){
    selectedLetters = state.form.round2.selectedLetters
  }else if(round === 3) {
    selectedLetters = state.form.round3.selectedLetters
  }else {
    console.log('rounds are fucked up!')
  }
  const letter1 = state.form.round1.letterToFind
  const letter2 = state.form.round2.letterToFind
  const letter3 = state.form.round3.letterToFind
  return {
    selectedLetters,
    id,
    name,
    round,
    letter1,
    letter2,
    letter3,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSelectLetter: (round, letter) => {
    dispatch(selectLetter(round, letter))
  },
  goToRating: () => {
    dispatch(selectRating())
  },
  goToRound2: () => {
    dispatch(selectRound2())
  },
  goToRound3: () => {
    dispatch(selectRound3())
  },
  onSaveTime: (round, time) => {
    dispatch(saveTime(round, time))
  }
});

Good = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Good);

export default Good;
