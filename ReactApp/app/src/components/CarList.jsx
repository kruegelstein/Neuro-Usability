import React, { Component } from 'react';
import CarListItem from './CarListItem';

class CarList extends Component {
  render() {
    return (
      <div>Cars
        <CarListItem />
      </div>
    )
  }
}

export default CarList;
