import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Spinner from './Spinner.jsx';
import Distraction from './Distraction.jsx';

import { alphabetBad, alphabetBasic } from '../constants/alphabet.js';

import { selectLetter, selectRating, saveTime, selectRound2, selectRound3 } from '../actions/actions.js';

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

  }

  componentDidMount() {
    timeStampBadStart = Date.now()
    this.enableDistraction()
  }

  enableDistraction() {
    console.log('enabling..')
    this.setState({ distraction: true }, () => {
      console.log('enabled', this.state.distraction)
      setTimeout(this.disableDistraction, 5000)
    })
  }

  disableDistraction() {
    console.log('disabling..')
    this.setState({ distraction: false }, () => {
      console.log('enabled', this.state.distraction)
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
      this.props.goToRating()
    }else {
      console.log('rounds are fucked up!')
    }
  }

  mockDelay() {
    setTimeout(this.disableSpinner, 2000)
  }

  disableSpinner() {
    this.setState({ spinner: false })
  }

  handleClick(event, index) {
    const round = this.props.round
    this.props.onSelectLetter(round, index)
    this.setState({ spinner: true })
    this.mockDelay()
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
      <div className="bad">
        <Distraction enabled={this.state.distraction}/>
        <h4 className="header-bad">Find all {letterToFind}</h4>
        <div className="alphabet-box-bad">
          <Spinner enabled={this.state.spinner}/>
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

Bad = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bad);

export default Bad;
