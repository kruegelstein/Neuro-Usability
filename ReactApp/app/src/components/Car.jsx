import React, { Component } from 'react';
import '../styles/Car.css';

class Car extends Component {
  render() {
    return (
      <div className="carContainer">
        <div className="carHeader">
          <h6 className="carName">CarName</h6>
          <a className="x">X</a>
        </div>
        <div className="carBody">
          <div className="iconContainer">
            <a>
              <i className="fa fa-car" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Car;
