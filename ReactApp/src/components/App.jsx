import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Intro from './Intro.jsx';
import Page from './Page.jsx';

class App extends Component {

// Main render method
  render() {
    if(this.props.intro) {
      return (
        <div className="app">
          <Intro />
        </div>
      )
    }
    return (
      <div className="app">
        <Page />
      </div>
    )
  }
}

App.propTypes = {
  intro: PropTypes.bool,
}

const mapStateToProps = (state, _ownProps) => {
  const intro = state.navigation.intro
  return {
    intro,
  };
};

App = connect(
  mapStateToProps,
  null,
)(App);

export default App;
