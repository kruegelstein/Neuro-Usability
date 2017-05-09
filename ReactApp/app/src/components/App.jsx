import React, { Component } from 'react';
import CarList from './CarList';
import Graph from './Graph';
import Options from './Options';

class App extends Component {
  render() {
    return (
      <div>DCAIT-Project
        <CarList />
        <Graph />
        <Options />
      </div>
    )
  }
}

export default App;
