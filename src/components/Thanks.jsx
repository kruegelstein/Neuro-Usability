import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { selectIntro, submitResultsToDB } from '../actions/actions.js';

class Thanks extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit() {
    const results = this.props.results

    this.props.onSubmitResultsToDB(results)
    this.props.goToIntro()
  }

// Main render method
  render() {
    return (
      <div className="thanks">
        <h4 className="header-thanks">Thank you for participating</h4>
        <div className="button-container" onClick={this.onSubmit}>
          <i id="arrowRating" className="fa fa-arrow-right fa-6" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

Thanks.propTypes = {
}

const mapStateToProps = (state, _ownProps) => {
  const results = state.result
  return {
    results
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onSubmitResultsToDB: (results) => {
    dispatch(submitResultsToDB(results))
  },
  goToIntro: () => {
    dispatch(selectIntro())
  }
});

Thanks = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Thanks);

export default Thanks;
