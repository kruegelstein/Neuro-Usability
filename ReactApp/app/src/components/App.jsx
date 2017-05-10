import React, { Component } from 'react';
import CarList from './CarList';
import Graph from './Graph';
import Options from './Options';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>DCAIT-Project</h2>
        <CarList />
        <Graph />
        <Options />
      </div>
    )
  }
}

export default App;
