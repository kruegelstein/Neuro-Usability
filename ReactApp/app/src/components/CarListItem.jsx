import React, { Component } from 'react';
import '../styles/CarListItem.css';

class CarListItem extends Component {
  render() {
    return (
      <div className="carItem">
        <h4 className="carItemText">Car-XYZ</h4>
      </div>
    )
  }
}

export default CarListItem;
