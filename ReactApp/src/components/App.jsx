import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Intro from './Intro.jsx';
import Good from './Good.jsx';
import Bad from './Bad.jsx';
import Admin from './Admin.jsx';
import Rating from './Rating.jsx';
import Demographics from './Demographics.jsx';

class App extends Component {

// Main render method
  render() {
    const intro = this.props.intro
    const good = this.props.good
    const bad = this.props.bad
    const admin = this.props.admin
    const rating = this.props.rating
    const demographics = this.props.demographics
    return (
      <div className="app">
        { intro ? <Intro /> : null}
        { good ? <Good /> : null}
        { bad ? <Bad /> : null}
        { admin ? <Admin /> : null}
        { rating ? <Rating /> : null}
        { demographics ? <Demographics /> : null}
      </div>
    )
  }
}

App.propTypes = {
  intro: PropTypes.bool,
  good: PropTypes.bool,
  bad: PropTypes.bool,
  admin: PropTypes.bool,
  rating: PropTypes.bool,
  demographics: PropTypes.bool,
}

const mapStateToProps = (state, _ownProps) => {
  return {
    intro: state.navigation.intro,
    good: state.navigation.good,
    bad: state.navigation.bad,
    admin: state.navigation.admin,
    rating: state.navigation.rating,
    demographics: state.navigation.demographics,
  };
};

App = connect(
  mapStateToProps,
  null,
)(App);

export default App;
