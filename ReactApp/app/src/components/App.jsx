import React, { Component } from 'react';
import CarList from './CarList';
import Graph from './Graph';
import SelectedCarList from './SelectedCarList';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>DCAIT-Project</h2>
        <CarList />
        <Graph />
        <SelectedCarList />
      </div>
    )
  }
}

export default App;
