import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button, Form, FormGroup, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { attributes } from '../constants/attrakDiff.js';
import { submitResults, selectIntro } from '../actions/actions.js';

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
  }

  onSubmit() {
    const id = this.props.id
    const name = this.props.name
    const level = this.props.level
    const timeGood = this.props.timeGood
    const letters = this.props.selectedLetters
    this.props.onSubmitResults(id, name, level, timeGood, letters)
    this.props.goToIntro()
  }

  handler(e) {
    console.log(e.target.id)
    console.log(e.target.checked)
  }

// Main render method
  render() {
    return (
      <div className="rating">
        <h4 className="header-rating">Please rate the app</h4>
        <div className="rating-container">
          {Object.keys(attributes)
            .map((a, index) => {
              return (
                <div key={index} className="attribute-container">
                  <p className="leftAttribute">{attributes[a].left}</p>
                  <Form className="form-container">
                    <FormGroup className="checkbox-container">
                      <Checkbox className="checkbox" id={`${attributes[a].left}-1`} onClick={e => this.handler(e)} inline/>
                      <Checkbox className="checkbox" id={`${attributes[a].left}-2`} onClick={e => this.handler(e)} inline/>
                      <Checkbox className="checkbox" id={`${attributes[a].left}-3`} onClick={e => this.handler(e)} inline/>
                      <Checkbox className="checkbox" id={`${attributes[a].left}-4`} onClick={e => this.handler(e)} inline/>
                      <Checkbox className="checkbox" id={`${attributes[a].left}-5`} onClick={e => this.handler(e)} inline/>
                      <Checkbox className="checkbox" id={`${attributes[a].left}-6`} onClick={e => this.handler(e)} inline/>
                      <Checkbox className="checkbox" id={`${attributes[a].left}-7`} onClick={e => this.handler(e)} inline/>
                    </FormGroup>
                  </Form>
                  <p className="rightAttribute">{attributes[a].left}</p>
                </div>
              )
            })
          }
          </div>
        <div className="button-container">
          <Button bsSize="large" className="ratingButton" onClick={this.onSubmit}>Submit</Button>
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
  const timeGood = state.form.timeGood
  const selectedLetters = state.form.selectedLetters
  return {
    selectedLetters,
    id,
    level,
    timeGood,
    name,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSubmitResults: (id, name, level, timeGood, letters) => {
    dispatch(submitResults(id, name, level, timeGood, letters))
  },
  goToIntro: () => {
    dispatch(selectIntro())
  }
});

RatingComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RatingComponent);

export default RatingComponent;