import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Col, FormControl, Checkbox } from 'react-bootstrap';
import { selectIntro } from '../actions/actions.js';

class Demographics extends Component {
  constructor(props) {
    super(props);
    // this.createRandomLetters = this.createRandomLetters.bind(this)
  }
  onSubmitDemographics() {
    console.log('submit')
  }

// Main render method
  render() {
    return (
      <div className="demographics">
        <h4 className="header-demographics">Please select your demographics</h4>
        <div className="demographics-container">
          <div className="attributes-container">
            <p className="question">Gender: </p>
            <Checkbox >
              Male
            </Checkbox>
            <Checkbox >
              Female
            </Checkbox>
          </div>
          <div className="attributes-container">
            <p className="question">Age: </p>
            <Checkbox >
              under 18
            </Checkbox>
            <Checkbox >
              18 - 22
            </Checkbox>
            <Checkbox >
              22-25
            </Checkbox>
            <Checkbox >
              25-30
            </Checkbox>
            <Checkbox >
              over 30
            </Checkbox>
          </div>
          <div className="attributes-container">
            <p className="question">Highest education: </p>
            <Checkbox >
              Abitur or less
            </Checkbox>
            <Checkbox >
              Bachelor
            </Checkbox>
            <Checkbox >
              Master
            </Checkbox>
            <Checkbox >
              Doctor
            </Checkbox>
          </div>
          <div className="attributes-container">
            <p className="question">Course of studies: </p>
            <Checkbox >
              Computer Science
            </Checkbox>
            <Checkbox >
              Computer Engineering
            </Checkbox>
            <Checkbox >
              Human Factors
            </Checkbox>
            <Checkbox >
              Other
            </Checkbox>
          </div>
          <div className="button-containerRating">
            <i id="arrowRating" className="fa fa-arrow-right fa-6" aria-hidden="true" onClick={this.onSubmitDemographics}></i>
          </div>
      </div>
    </div>
    )
  }
}

Demographics.propTypes = {
}

const mapDispatchToProps = (dispatch, _ownProps) => ({
  goToIntro: () => {
    dispatch(selectIntro())
  }
});

Demographics = connect(
  // mapStateToProps,
  mapDispatchToProps,
)(Demographics);

export default Demographics;
