import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button, Form, FormGroup, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { attributes } from '../constants/attrakDiff.js';
import { submitResults, selectDemographics } from '../actions/actions.js';
import { alphabetGood } from '../constants/alphabet.js';

let einfach
let hässlich
let praktisch
let stilvoll
let voraussagbar
let minderwertig
let phantasielos
let gut
let verwirrend
let lahm
class RatingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      einfach1: false,
      einfach2: false,
      einfach3: false,
      einfach4: false,
      einfach5: false,
      einfach6: false,
      einfach7: false,
      hässlich1: false,
      hässlich2: false,
      hässlich3: false,
      hässlich4: false,
      hässlich5: false,
      hässlich6: false,
      hässlich7: false,
      praktisch1: false,
      praktisch2: false,
      praktisch3: false,
      praktisch4: false,
      praktisch5: false,
      praktisch6: false,
      praktisch7: false,
      stilvoll1: false,
      stilvoll2: false,
      stilvoll3: false,
      stilvoll4: false,
      stilvoll5: false,
      stilvoll6: false,
      stilvoll7: false,
      voraussagbar1: false,
      voraussagbar2: false,
      voraussagbar3: false,
      voraussagbar4: false,
      voraussagbar5: false,
      voraussagbar6: false,
      voraussagbar7: false,
      minderwertig1: false,
      minderwertig2: false,
      minderwertig3: false,
      minderwertig4: false,
      minderwertig5: false,
      minderwertig6: false,
      minderwertig7: false,
      phantasielos1: false,
      phantasielos2: false,
      phantasielos3: false,
      phantasielos4: false,
      phantasielos5: false,
      phantasielos6: false,
      phantasielos7: false,
      gut1: false,
      gut2: false,
      gut3: false,
      gut4: false,
      gut5: false,
      gut6: false,
      gut7: false,
      verwirrend1: false,
      verwirrend2: false,
      verwirrend3: false,
      verwirrend4: false,
      verwirrend5: false,
      verwirrend6: false,
      verwirrend7: false,
      lahm1: false,
      lahm2: false,
      lahm3: false,
      lahm4: false,
      lahm5: false,
      lahm6: false,
      lahm7: false,
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handler = this.handler.bind(this)

  }

  onSubmit() {
    Object.keys(this.state)
      .map(k => {
        if(this.state[k]) {
          const attribute = k.slice(0, k.length -1)
          const rating = k.slice(k.length -1, k.length)
          switch(attribute) {
            case 'einfach':
              einfach = rating
            case 'hässlich':
              hässlich = rating
            case 'praktisch':
              praktisch = rating
            case 'stilvoll':
              stilvoll = rating
            case 'voraussagbar':
              voraussagbar = rating
            case 'minderwertig':
              minderwertig = rating
            case 'phantasielos':
              phantasielos = rating
            case 'gut':
              gut = rating
            case 'verwirrend':
              verwirrend = rating
            case 'lahm':
              lahm = rating
          }
        }
      })
    const id = this.props.id
    const name = this.props.name
    const level = this.props.level

    const time1 = this.props.time1
    const time2 = this.props.time2
    const time3 = this.props.time3
    const time4 = this.props.time4
    const time5 = this.props.time5

    const letter1 = this.props.letter1
    const letter2 = this.props.letter2
    const letter3 = this.props.letter3
    const letter4 = this.props.letter4
    const letter5 = this.props.letter5

    const clicks1 = this.props.clicks1
    const clicks2 = this.props.clicks2
    const clicks3 = this.props.clicks3
    const clicks4 = this.props.clicks4
    const clicks5 = this.props.clicks5

    const clickInformation1 = this.props.clickInformation1
    const clickInformation2 = this.props.clickInformation2
    const clickInformation3 = this.props.clickInformation3
    const clickInformation4 = this.props.clickInformation4
    const clickInformation5 = this.props.clickInformation5

    const selectedIndizes1 = this.props.selectedIndizes1
    const selectedLetters1 = selectedIndizes1.map(i => alphabetGood[i])

    const selectedIndizes2 = this.props.selectedIndizes2
    const selectedLetters2 = selectedIndizes2.map(i => alphabetGood[i])

    const selectedIndizes3 = this.props.selectedIndizes3
    const selectedLetters3 = selectedIndizes3.map(i => alphabetGood[i])

    const selectedIndizes4 = this.props.selectedIndizes4
    const selectedLetters4 = selectedIndizes4.map(i => alphabetGood[i])

    const selectedIndizes5 = this.props.selectedIndizes5
    const selectedLetters5 = selectedIndizes5.map(i => alphabetGood[i])
    this.props.onSubmitResults(
      id,
      name,
      level,
      time1,
      time2,
      time3,
      time4,
      time5,
      selectedLetters1,
      selectedLetters2,
      selectedLetters3,
      selectedLetters4,
      selectedLetters5,
      letter1,
      letter2,
      letter3,
      letter4,
      letter5,
      einfach,
      hässlich,
      praktisch,
      stilvoll,
      voraussagbar,
      minderwertig,
      phantasielos,
      gut,
      verwirrend,
      lahm,
      clicks1,
      clicks2,
      clicks3,
      clicks4,
      clicks5,
      clickInformation1,
      clickInformation2,
      clickInformation3,
      clickInformation4,
      clickInformation5,
    )
    this.props.goToDemographics()
  }

  onAlert() {
    alert('Please rate on every category')
  }

  handler(e) {
    const clickedAttribute = e.target.id
    const attributeName = clickedAttribute.slice(0, -1)
    const attributeNumber = clickedAttribute.slice(clickedAttribute.length -1, clickedAttribute.length)
    // Setting the clicked attribute to true if it was false before
    if(!this.state[clickedAttribute]) {
      // this.state[clickedAttribute] = true
      this.setState({ [clickedAttribute]: true })
      Object.keys(this.state)
        .map( k => {
          // Setting all other checkboxes of this attribute to false (only one selectable)
          if(k.indexOf(attributeName) > -1 && k !== clickedAttribute) {
            this.setState({ [k]: false })
          } else {
            return
          }
        })
    }
    // Setting the clicked attribute to false if it was true before
    else {
      this.setState({ [clickedAttribute]: false })
    }
  }

  checkSubmit() {
    const einfach = this.state.einfach1 || this.state.einfach2 || this.state.einfach3 || this.state.einfach4 || this.state.einfach5 || this.state.einfach6 || this.state.einfach7 ? true : false
    const hässlich = this.state.hässlich1 || this.state.hässlich2 || this.state.hässlich3 || this.state.hässlich4 || this.state.hässlich5 || this.state.hässlich6 || this.state.hässlich7 ? true : false
    const praktisch = this.state.praktisch1 || this.state.praktisch2 || this.state.praktisch3 || this.state.praktisch4 || this.state.praktisch5 || this.state.praktisch6 || this.state.praktisch7 ? true : false
    const stilvoll = this.state.stilvoll1 || this.state.stilvoll2 || this.state.stilvoll3 || this.state.stilvoll4 || this.state.stilvoll5 || this.state.stilvoll6 || this.state.stilvoll7 ? true : false
    const voraussagbar = this.state.voraussagbar1 || this.state.voraussagbar2 || this.state.voraussagbar3 || this.state.voraussagbar4 || this.state.voraussagbar5 || this.state.voraussagbar6 || this.state.voraussagbar7 ? true : false
    const minderwertig = this.state.minderwertig1 || this.state.minderwertig2 || this.state.minderwertig3 || this.state.minderwertig4 || this.state.minderwertig5 || this.state.minderwertig6 || this.state.minderwertig7 ? true : false
    const phantasielos = this.state.phantasielos1 || this.state.phantasielos2 || this.state.phantasielos3 || this.state.phantasielos4 || this.state.phantasielos5 || this.state.phantasielos6 || this.state.phantasielos7 ? true : false
    const gut = this.state.gut1 || this.state.gut2 || this.state.gut3 || this.state.gut4 || this.state.gut5 || this.state.gut6 || this.state.gut7 ? true : false
    const verwirrend = this.state.verwirrend1 || this.state.verwirrend2 || this.state.verwirrend3 || this.state.verwirrend4 || this.state.verwirrend5 || this.state.verwirrend6 || this.state.verwirrend7 ? true : false
    const lahm = this.state.lahm1 || this.state.lahm2 || this.state.lahm3 || this.state.lahm4 || this.state.lahm5 || this.state.lahm6 || this.state.lahm7 ? true : false

    const result = (einfach && hässlich && praktisch && stilvoll && voraussagbar && minderwertig && phantasielos && gut && verwirrend && lahm)

    return result
  }

// Main render method
  render() {
    // console.log('###', einfach, hässlich, praktisch, stilvoll, voraussagbar, minderwertig, phantasielos, gut, verwirrend, lahm)
    const submitEnabled = this.checkSubmit()
    return (
      <div className="rating">
        <h4 className="header-rating">Please rate the app</h4>
        <div className="rating-container">
          {Object.keys(attributes)
            .map((a, index) => {
              return (
                <div key={index} className="attribute-container">
                  <div className="left-container">
                    <p className="leftAttribute">{attributes[a].left}</p>
                  </div>
                  <div className="outer-form-container">
                    <Form className="form-container">
                      <FormGroup className="checkbox-container">
                        <Checkbox className="checkbox" id={`${attributes[a].left}1`} onClick={e => this.handler(e)} inline checked={this.state[`${attributes[a].left}1`]}/>
                        <Checkbox className="checkbox" id={`${attributes[a].left}2`} onClick={e => this.handler(e)} inline checked={this.state[`${attributes[a].left}2`]}/>
                        <Checkbox className="checkbox" id={`${attributes[a].left}3`} onClick={e => this.handler(e)} inline checked={this.state[`${attributes[a].left}3`]}/>
                        <Checkbox className="checkbox" id={`${attributes[a].left}4`} onClick={e => this.handler(e)} inline checked={this.state[`${attributes[a].left}4`]}/>
                        <Checkbox className="checkbox" id={`${attributes[a].left}5`} onClick={e => this.handler(e)} inline checked={this.state[`${attributes[a].left}5`]}/>
                        <Checkbox className="checkbox" id={`${attributes[a].left}6`} onClick={e => this.handler(e)} inline checked={this.state[`${attributes[a].left}6`]}/>
                        <Checkbox className="checkbox" id={`${attributes[a].left}7`} onClick={e => this.handler(e)} inline checked={this.state[`${attributes[a].left}7`]}/>
                      </FormGroup>
                    </Form>
                  </div>
                  <div className="right-container">
                    <p className="rightAttribute">{attributes[a].right}</p>
                  </div>
                </div>
              )
            })
          }
          </div>
          <div className={`${submitEnabled ? 'button-containerRating' : 'button-containerRatingDisabled'}`} onClick={submitEnabled ? this.onSubmit : this.onAlert}>
            <i id="arrowRating" className="fa fa-arrow-right fa-6" aria-hidden="true"></i>
          </div>
      </div>
    )
  }
}

RatingComponent.propTypes = {
}

const mapStateToProps = (state, _ownProps) => {
  const id = state.form.id
  const name = state.form.name
  const level = state.form.level
  const time1 = state.form.round1.timeForRound
  const time2 = state.form.round2.timeForRound
  const time3 = state.form.round3.timeForRound
  const time4 = state.form.round4.timeForRound
  const time5 = state.form.round5.timeForRound
  const clicks1 = state.form.round1.clicks
  const clicks2 = state.form.round2.clicks
  const clicks3 = state.form.round3.clicks
  const clicks4 = state.form.round4.clicks
  const clicks5 = state.form.round5.clicks
  const letter1 = state.form.round1.letterToFind
  const letter2 = state.form.round2.letterToFind
  const letter3 = state.form.round3.letterToFind
  const letter4 = state.form.round4.letterToFind
  const letter5 = state.form.round5.letterToFind
  const selectedIndizes1 = state.form.round1.selectedIndizes
  const selectedIndizes2 = state.form.round2.selectedIndizes
  const selectedIndizes3 = state.form.round3.selectedIndizes
  const selectedIndizes4 = state.form.round4.selectedIndizes
  const selectedIndizes5 = state.form.round5.selectedIndizes
  const clickInformation1 = state.form.round1.clickInformation
  const clickInformation2 = state.form.round2.clickInformation
  const clickInformation3 = state.form.round3.clickInformation
  const clickInformation4 = state.form.round4.clickInformation
  const clickInformation5 = state.form.round5.clickInformation
  return {
    selectedIndizes1,
    selectedIndizes2,
    selectedIndizes3,
    selectedIndizes4,
    selectedIndizes5,
    clickInformation1,
    clickInformation2,
    clickInformation3,
    clickInformation4,
    clickInformation5,
    time1,
    time2,
    time3,
    time4,
    time5,
    clicks1,
    clicks2,
    clicks3,
    clicks4,
    clicks5,
    letter1,
    letter2,
    letter3,
    letter4,
    letter5,
    id,
    level,
    name,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSubmitResults: (id, name, level, time1, time2, time3, time4, time5, selectedLetters1, selectedLetters2, selectedLetters3, selectedLetters4, selectedLetters5, letter1, letter2, letter3, letter4, letter5, einfach, hässlich, praktisch, stilvoll, voraussagbar, minderwertig, phantasielos, gut, verwirrend, lahm, clicks1, clicks2, clicks3, clicks4, clicks5, clickInformation1, clickInformation2, clickInformation3, clickInformation4, clickInformation5) => {
    dispatch(
      submitResults(
        id,
        name,
        level,
        time1,
        time2,
        time3,
        time4,
        time5,
        selectedLetters1,
        selectedLetters2,
        selectedLetters3,
        selectedLetters4,
        selectedLetters5,
        letter1,
        letter2,
        letter3,
        letter4,
        letter5,
        einfach,
        hässlich,
        praktisch,
        stilvoll,
        voraussagbar,
        minderwertig,
        phantasielos,
        gut,
        verwirrend,
        lahm,
        clicks1,
        clicks2,
        clicks3,
        clicks4,
        clicks5,
        clickInformation1,
        clickInformation2,
        clickInformation3,
        clickInformation4,
        clickInformation5,
      )
    )
  },
  goToDemographics: () => {
    dispatch(selectDemographics())
  }
});

RatingComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RatingComponent);

export default RatingComponent;
