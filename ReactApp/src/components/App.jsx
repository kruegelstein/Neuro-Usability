import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CarList from './CarList';
import Graph from './Graph';
import SelectedCarList from './SelectedCarList';


class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Simulation of Vehicle-2-X Communication</h2>
        <CarList />
        <Graph />
        <SelectedCarList />
      </div>
    )
  }
}

App.propTypes = {

}

export default App;
