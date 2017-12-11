import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Col, FormControl, Checkbox } from 'react-bootstrap';
import { selectIntro, submitDemographics } from '../actions/actions.js';

class Demographics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: {
        male: false,
        female: false,
      },
      age: 0,
      edu: {
        abi: false,
        ba: false,
        ma: false,
        dr: false,
      },
      course: {
        cs: false,
        ce: false,
        hf: false,
        other: false,
      }
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  onSubmit() {
    let gender
    let edu
    let course
    const age = this.state.age
    Object.keys(this.state)
      .map(k => {
        switch(k) {
          case'gender':
            gender = this.state.gender.male ? 'male' : 'female'
            return
          case'edu':
            this.state.edu.abi ? edu = 'abi' : null
            this.state.edu.ba ? edu = 'ba' : null
            this.state.edu.ma ? edu = 'ma' : null
            this.state.edu.dr ? edu = 'dr' : null
            return
          case'course':
            this.state.course.cs ? course = 'cs' : null
            this.state.course.ce ? course = 'ce' : null
            this.state.course.hf ? course = 'hf' : null
            this.state.course.other ? course = 'other' : null
            return
        }
      })
    const id = this.props.id
    this.props.onSubmitDemographics(id, gender, age, edu, course)
    this.props.goToIntro()
  }

  handleGender(e) {
    const clicked = e.target.id
    switch(clicked) {
      case 'genderMale':
        if (!this.state.gender.male) {
          this.setState({ gender: { male: true, female: false }})
          return
        } else {
          this.setState({ gender: { male: false, female: false }})
          return
        }
      case 'genderFemale':
        if (!this.state.gender.female) {
          this.setState({ gender: { male: false, female: true }})
          return
        } else {
          this.setState({ gender: { male: false, female: false }})
          return
        }
      default:
        return
    }
  }

  handleEdu(e) {
    const clicked = e.target.id
    switch(clicked) {
      case 'abi':
        if (!this.state.edu.abi) {
          this.setState({ edu: { abi: true, ba: false, ma: false, dr: false }})
          return
        } else {
          this.setState({ edu: { abi: false, ba: false, ma: false, dr: false }})
          return
        }
      case 'ba':
        if (!this.state.edu.ba) {
          this.setState({ edu: { abi: false, ba: true, ma: false, dr: false }})
          return
        } else {
          this.setState({ edu: { abi: false, ba: false, ma: false, dr: false }})
          return
        }
      case 'ma':
        if (!this.state.edu.ma) {
          this.setState({ edu: { abi: false, ba: false, ma: true, dr: false }})
          return
        } else {
          this.setState({ edu: { abi: false, ba: false, ma: false, dr: false }})
          return
        }
      case 'dr':
        if (!this.state.edu.dr) {
          this.setState({ edu: { abi: false, ba: false, ma: false, dr: true }})
          return
        } else {
          this.setState({ edu: { abi: false, ba: false, ma: false, dr: false }})
          return
        }
      default:
        return
    }
  }

  handleCourse(e) {
    const clicked = e.target.id
    switch(clicked) {
      case 'cs':
        if (!this.state.course.cs) {
          this.setState({ course: { cs: true, ce: false, hf: false, other: false }})
          return
        } else {
          this.setState({ course: { cs: false, ce: false, hf: false, other: false }})
          return
        }
      case 'ce':
        if (!this.state.course.ce) {
          this.setState({ course: { cs: false, ce: true, hf: false, other: false }})
          return
        } else {
          this.setState({ course: { cs: false, ce: false, hf: false, other: false }})
          return
        }
      case 'hf':
        if (!this.state.course.hf) {
          this.setState({ course: { cs: false, ce: false, hf: true, other: false }})
          return
        } else {
          this.setState({ course: { cs: false, ce: false, hf: false, other: false }})
          return
        }
      case 'other':
        if (!this.state.course.other) {
          this.setState({ course: { cs: false, ce: false, hf: false, other: true }})
          return
        } else {
          this.setState({ course: { cs: false, ce: false, hf: false, other: false }})
          return
        }
      default:
        return
    }
  }

  onAlert() {
    alert('Please check every question!')
  }

  handleChange(e) {
    let fieldVal = e.target.value;
    this.setState({ age: fieldVal })
  }

  checkSubmit() {
    const gender = this.state.gender.male || this.state.gender.female
    const age = this.state.age
    const edu = this.state.edu.abi || this.state.edu.ba || this.state.edu.ma || this.state.edu.dr
    const course = this.state.course.cs || this.state.course.ce || this.state.course.hf || this.state.course.other
    const result = gender && age > 0 && edu && course
    return result
  }

// Main render method
  render() {
    const submitEnabled = this.checkSubmit()
    return (
      <div className="demographics">
        <h4 className="header-demographics">Please select your demographics</h4>
        <div className="demographics-container">
          <div className="attributes-container">
            <p className="question">Gender: </p>
            <Checkbox id="genderMale" onClick={e => this.handleGender(e)} checked={this.state.gender.male}>
              Male
            </Checkbox>
            <Checkbox id="genderFemale" onClick={e => this.handleGender(e)} checked={this.state.gender.female}>
              Female
            </Checkbox>
          </div>
          <div className="attributes-container">
            <p className="question">Age: </p>
            <FormGroup id="age">
              <FormControl
                autoFocus
                name="age"
                onChange={this.handleChange.bind(this)}
                value={this.props.age}
                id="ageField"
                type="age"
                placeholder="Age" />
            </FormGroup>
          </div>
          <div className="attributes-container">
            <p className="question">Highest education: </p>
            <Checkbox id="abi" onClick={e => this.handleEdu(e)} checked={this.state.edu.abi}>
              Abitur or less
            </Checkbox>
            <Checkbox id="ba" onClick={e => this.handleEdu(e)} checked={this.state.edu.ba}>
              Bachelor
            </Checkbox>
            <Checkbox id="ma" onClick={e => this.handleEdu(e)} checked={this.state.edu.ma}>
              Master
            </Checkbox>
            <Checkbox id="dr" onClick={e => this.handleEdu(e)} checked={this.state.edu.dr}>
              Doctor
            </Checkbox>
          </div>
          <div className="attributes-container">
            <p className="question">Course of studies: </p>
            <Checkbox id="cs" onClick={e => this.handleCourse(e)} checked={this.state.course.cs}>
              Computer Science
            </Checkbox>
            <Checkbox id="ce" onClick={e => this.handleCourse(e)} checked={this.state.course.ce}>
              Computer Engineering
            </Checkbox>
            <Checkbox id="hf" onClick={e => this.handleCourse(e)} checked={this.state.course.hf}>
              Human Factors
            </Checkbox>
            <Checkbox id="other" onClick={e => this.handleCourse(e)} checked={this.state.course.other}>
              Other
            </Checkbox>
          </div>
          <div className= {`${submitEnabled ? 'button-containerRating' : 'button-containerRatingDisabled'}`} onClick={submitEnabled ? this.onSubmit : this.onAlert}>
            <i id="arrowRating" className="fa fa-arrow-right fa-6" aria-hidden="true"></i>
          </div>
      </div>
    </div>
    )
  }
}

Demographics.propTypes = {
}

const mapStateToProps = (state, _ownProps) => {
  const id = state.form.id
  return {
    id
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSubmitDemographics: (id, gender, age, edu, course) => {
    dispatch(submitDemographics(id, gender, age, edu, course))
  },
  goToIntro: () => {
    dispatch(selectIntro())
  }
});

Demographics = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Demographics);

export default Demographics;
