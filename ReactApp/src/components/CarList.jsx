import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getCars, selectCar } from '../actions/actions.js'
import CarListItem from './CarListItem';

class CarList extends Component {
  componentDidMount() {
    this.props.loadCarsFromDB();
  }

  render() {
    return (
      <div className="carList col-md-2">
        <h4 className="carListHeader">Cars</h4>
        <div className="carItemContainer">
          {
            this.props.cars.map((car) => {
              return (
                <CarListItem
                  key={car.index}
                  name={car.name}
                  onClick={() => this.props.onSelectCar(this.props.selectedCars.concat(car.index))}
                  />
              )
            })
          }
        </div>
      </div>
    )
  }
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loadCarsFromDB: PropTypes.func.isRequired,
  onSelectCar: PropTypes.func.isRequired,
}

const mapStateToProps = (state, _ownProps) => {
  let cars = null;
  const carIds = Object.keys(state.cars);
  cars = carIds.map(cId => state.cars[cId]);
  return {
    cars,
    selectedCars: state.navigation.selected.cars,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  loadCarsFromDB: () => {
    dispatch(getCars());
  },
  onSelectCar: (car) => {
    dispatch(selectCar(car));
  },
});

CarList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarList);

export default CarList;
