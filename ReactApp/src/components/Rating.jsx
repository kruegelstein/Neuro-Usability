import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { submitResults, selectIntro } from '../actions/actions.js';

class RatingComponent extends Component {
  constructor(props) {
    super(props);
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

  // handleSelection(event, index, attribute) {
  //
  //   // this.props.onSelectLetter(letter)
  // }

// Main render method
  render() {
    const attributes = ['Difficulty', 'Attractiveness', 'Joy']
    return (
      <div className="rating">
        <h4 className="header-rating">AttracDiff2Mini goes here</h4>
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
