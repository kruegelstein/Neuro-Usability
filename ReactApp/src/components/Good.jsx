import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Letter from './Letter.jsx';
import { alphabetGood, alphabetBasic } from '../constants/alphabet.js';

import { selectLetter, deselectLetter, selectRating, saveTime, selectRound2, selectRound3 } from '../actions/actions.js';

let timeStampGoodStart
let timeStampGoodEnd

class Good extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLetters: []
    }
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
      this.state.selectedLetters = []
      this.props.goToRound2()
    } else if(round === 2) {
      this.state.selectedLetters = []
      this.props.goToRound3()
    } else if(round === 3) {
      this.state.selectedLetters = []
      this.props.goToRating()
    }else {
      console.log('rounds are fucked up!')
    }
  }

  handleClick(event, index) {
    const round = this.props.round
    const i = this.state.selectedLetters.indexOf(index)
    if(i > -1) {
      this.state.selectedLetters.splice(i, 1)
      this.props.onDeselectLetter(round, index)
    } else {
      this.state.selectedLetters.push(index)
      this.props.onSelectLetter(round, index)
    }
  }

// Main render method
  render() {
    const selectedIndizes = this.props.selectedIndizes
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
              <Letter
                key={index}
                selected={this.state.selectedLetters.indexOf(index) > -1 ? true : false}
                onClick={event => this.handleClick(event, index)}
                letter= {letter}
              />
            )
          }
        </div>
        <div className="result-box-good">
          {selectedIndizes
            .map((i, index) =>
              <div key={index} className="letter-box">
                <p className="selected-letter">{alphabetGood[i]}</p>
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
  let selectedIndizes = []
  if(round === 1) {
    selectedIndizes = state.form.round1.selectedIndizes
  }else if(round === 2){
    selectedIndizes = state.form.round2.selectedIndizes
  }else if(round === 3) {
    selectedIndizes = state.form.round3.selectedIndizes
  }else {
    console.log('rounds are fucked up!')
  }
  const letter1 = state.form.round1.letterToFind
  const letter2 = state.form.round2.letterToFind
  const letter3 = state.form.round3.letterToFind
  return {
    selectedIndizes,
    id,
    name,
    round,
    letter1,
    letter2,
    letter3,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSelectLetter: (round, index) => {
    dispatch(selectLetter(round, index))
  },
  onDeselectLetter: (round, index) => {
    dispatch(deselectLetter(round, index))
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
