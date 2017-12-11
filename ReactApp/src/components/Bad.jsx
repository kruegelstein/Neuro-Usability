import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Spinner from './Spinner.jsx';
import Distraction from './Distraction.jsx';

import { alphabetBad, alphabetBasic } from '../constants/alphabet.js';

import { recognizeClick, saveClickPosition, selectLetter, selectRating, saveTime, selectRound2, selectRound3, selectRound4, selectRound5 } from '../actions/actions.js';

let timeStampBadStart
let timeStampBadEnd

class Bad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      distraction: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.disableSpinner = this.disableSpinner.bind(this)
    this.enableDistraction = this.enableDistraction.bind(this)
    this.disableDistraction = this.disableDistraction.bind(this)
    this.countClick = this.countClick.bind(this)

  }

  componentDidMount() {
    timeStampBadStart = Date.now()
    this.enableDistraction()
  }

  enableDistraction() {
    this.setState({ distraction: true }, () => {
      setTimeout(this.disableDistraction, 5000)
    })
  }

  disableDistraction() {
    this.setState({ distraction: false }, () => {
      setTimeout(this.enableDistraction, 5000)
    })
  }

  onSubmit() {
    timeStampBadEnd = Date.now()
    const timeDiff = (timeStampBadEnd - timeStampBadStart) / 1000
    const round = this.props.round
    this.props.onSaveTime(round, timeDiff)
    if(round === 1) {
      this.props.goToRound2()
    } else if(round === 2) {
      this.props.goToRound3()
    } else if(round === 3) {
      this.props.goToRound4()
    } else if(round === 4) {
      this.props.goToRound5()
    } else if(round === 5) {
      this.props.goToRating()
    } else {
      console.log('rounds are fucked up!')
    }
  }

  mockDelay() {
    setTimeout(this.disableSpinner, 2000)
  }

  disableSpinner() {
    this.setState({ spinner: false })
  }

  countClick(event) {
    const x = event.clientX
    const y = event.clientY
    const time = Date.now()
    const round = this.props.round
    this.props.onSaveClickPositionAndTime(x, y, time, round)
    this.props.onRecognizeClick(round)
  }

  handleClick(event, index) {
    const round = this.props.round
    this.countClick(event)
    this.props.onSelectLetter(round, index)
    this.setState({ spinner: true })
    this.mockDelay()
  }

// Main render method
  render() {
    const selectedIndizes = this.props.selectedIndizes
    const submitEnabled = selectedIndizes.length > 0 ? true : false
    const round = this.props.round
    let letterToFind = ''
    if(round === 1) {
      letterToFind = this.props.letter1
    } else if(round === 2) {
      letterToFind = this.props.letter2
    } else if(round === 3){
      letterToFind = this.props.letter3
    } else if(round === 4){
      letterToFind = this.props.letter4
    } else if(round === 5){
      letterToFind = this.props.letter5
    } else {
      letterToFind = undefined
    }
    return (
      <div className="bad">
        <Distraction enabled={this.state.distraction} countClick={e => this.countClick(e)}/>
        <h4 className="header-bad" onClick={e => this.countClick(e)}>Find all {letterToFind}</h4>
        <div className="alphabet-box-bad">
          <Spinner enabled={this.state.spinner} countClick={e => this.countClick(e)}/>
          {alphabetBad
            .map((letter, index) => {
              const randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0)
              const wiggle = randomNumber === 2 ? true : false
              return(
                <a key={index} className={`${wiggle ? 'letter-container-bad-animated' : 'letter-container-bad'}`} onClick={event => this.handleClick(event, index)}>
                  <p className="letter-bad">
                    {letter}
                  </p>
                </a>
              )
            })
          }
        </div>
        <div className= {`${submitEnabled ? 'button-containerBad' : 'button-containerBadDisabled'}`} onClick={submitEnabled ? this.onSubmit : this.onAlert}>
          {submitEnabled
            ?
            <i id="arrowBad" className="fa fa-arrow-right fa-6" aria-hidden="true"></i>
            :
            <i id="crossBad" className="fa fa-times fa-6" aria-hidden="true"></i>
          }
          <p className="round-indicator-bad">{round}/5</p>
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
  const round = state.form.round
  let selectedIndizes = []
  if(round === 1) {
    selectedIndizes = state.form.round1.selectedIndizes
  }else if(round === 2){
    selectedIndizes = state.form.round2.selectedIndizes
  }else if(round === 3) {
    selectedIndizes = state.form.round3.selectedIndizes
  }else if(round === 4) {
    selectedIndizes = state.form.round4.selectedIndizes
  }else if(round === 5) {
    selectedIndizes = state.form.round5.selectedIndizes
  }else {
    console.log('rounds are fucked up!')
  }
  const letter1 = state.form.round1.letterToFind
  const letter2 = state.form.round2.letterToFind
  const letter3 = state.form.round3.letterToFind
  const letter4 = state.form.round4.letterToFind
  const letter5 = state.form.round5.letterToFind
  return {
    selectedIndizes,
    id,
    name,
    round,
    letter1,
    letter2,
    letter3,
    letter4,
    letter5,
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
  goToRound4: () => {
    dispatch(selectRound4())
  },
  goToRound5: () => {
    dispatch(selectRound5())
  },
  onSaveTime: (round, time) => {
    dispatch(saveTime(round, time))
  },
  onRecognizeClick: (round) => {
    dispatch(recognizeClick(round))
  },
  onSaveClickPositionAndTime: (x, y, time, round) => {
    dispatch(saveClickPosition(x, y, time, round))
  }
});

Bad = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bad);

export default Bad;
