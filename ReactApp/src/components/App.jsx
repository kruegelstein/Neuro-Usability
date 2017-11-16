import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Intro from './Intro.jsx';
import Good from './Good.jsx';
import Bad1 from './Bad1.jsx';
import Bad2 from './Bad2.jsx';

class App extends Component {

// Main render method
  render() {
    const intro = this.props.intro
    const good = this.props.good
    const bad1 = this.props.bad1
    const bad2 = this.props.bad2
    return (
      <div className="app">
        { intro ? <Intro /> : null}
        { good ? <Good /> : null}
        { bad1 ? <Bad1 /> : null}
        { bad2 ? <Bad2 /> : null}
      </div>
    )
  }
}

App.propTypes = {
  intro: PropTypes.bool,
  good: PropTypes.bool,
  bad1: PropTypes.bool,
  bad2: PropTypes.bool,
}

const mapStateToProps = (state, _ownProps) => {
  return {
    intro: state.navigation.intro,
    good: state.navigation.good,
    bad1: state.navigation.bad1,
    bad2: state.navigation.bad2,
  };
};

App = connect(
  mapStateToProps,
  null,
)(App);

export default App;
