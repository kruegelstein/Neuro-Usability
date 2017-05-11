import React, { Component } from 'react';
import '../styles/Car.css';

class Car extends Component {
  render() {
    return (
      <div className="carContainer">
        <div className="carHeader">
          <h6 className="carName">CarName</h6>
        </div>
        <div className="carBody">
          <div className="iconContainer">
            <i className="fa fa-car" aria-hidden="true"></i>
          </div>
        </div>
        <div className="carFooter">
          <button className="options btn btn-primary">Options</button>
          <button className="x btn btn-danger">X</button>
        </div>
      </div>
    )
  }
}

export default Car;
