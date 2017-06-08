import React, { Component } from 'react';
import CarListItem from './CarListItem';
// import '../../style/CarList.css';

class CarList extends Component {
  render() {
    return (
      <div className="carList col-md-2">
        <h4 className="carListHeader">Cars</h4>
        <div className="carItemContainer">
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
          <CarListItem />
        </div>
      </div>
    )
  }
}

export default CarList;
