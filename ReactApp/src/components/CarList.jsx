import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import {
  getCars, setCarsFilter,
  unselectCar, selectCarFromList,
  unselectAllCars, selectCar,
  openModal, filterSelected,
  loadAdditionalData } from '../actions/actions.js'
import CarListItem from './CarListItem';

class CarList extends Component {
  componentDidMount() {
    this.props.loadCarsFromDB();
  }

  renderSelection() {
    return (
      <div className="aboveList">
        <a
          onClick={() => this.props.onSetCarsFilter(false)}
        >
          <p>Cars ({this.props.numOfAllCars})</p>
        </a>
        <a
          onClick={() => this.props.onSetCarsFilter(true)}
        >
          <p>Selected Cars ({this.props.numOfSelCars})</p>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className="col-sm-3 col-md-3 col-lg-3 list">
        {this.renderSelection()}
        <div className="carList">
          <div className="listHeader">
            <a className={`reset ${!this.props.filterSelected ? 'hidden' : ''}`} onClick={() => this.props.onUnselectAllCars()}>
              Reset
            </a>
              <span className="header">{this.props.headerText}</span>
          </div>
          <div className="carItemContainer">
            {
              this.props.viewedCars.map((car) => {
                return (
                  <CarListItem
                    key={car.id}
                    index={car.id}
                    name={car.name}
                    onClick={() => {
                        this.props.onSelectCarFromList(
                        this.props.selectedCars.filter(c => c !== car.id).concat(car.id), car.id, car.name)
                      }
                    }
                    onEdit={() => this.props.onOpenModal(car.id)}
                    onUnselect={() => this.props.onUnselectCar(car.id)}
                    onSelect= {() => this.props.onSelectCar(car.id)}
                    filterSelected={this.props.filterSelected}
                    isSelected={car.id === this.props.selectedCars.find(c => c === car.id)}
                    />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

CarList.propTypes = {
  loadCarsFromDB: PropTypes.func.isRequired,
  onSelectCarFromList: PropTypes.func.isRequired,
  onSetCarsFilter: PropTypes.func.isRequired,
  onUnselectCar: PropTypes.func.isRequired,
  onUnselectAllCars: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onSetCarsFilter: PropTypes.func.isRequired,
}

const mapStateToProps = (state, _ownProps) => {
  let viewedCars = [];
  let headerText = "Cars";

  if(!state.navigation.selected.filterSelected) {
    const carIds = Object.keys(state.cars)
    viewedCars = carIds.map(cId => state.cars[cId]);
  } else {
    const carIds = state.navigation.selected.cars || [];
    viewedCars = carIds.map(cId => state.cars[cId]);
    headerText = "Selected Cars";
  }
  const numOfAllCars = Object.keys(state.cars).length
  const numOfSelCars = state.navigation.selected.cars.length

  return {
    headerText,
    viewedCars,
    selectedCars: state.navigation.selected.cars,
    filterSelected: state.navigation.selected.filterSelected,
    numOfAllCars,
    numOfSelCars,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  loadCarsFromDB: () => {
    dispatch(getCars());
  },
  onSelectCar: (car) => {
    dispatch(selectCar(car))
  },
  onSelectCarFromList: (carList, car, carName) => {
    dispatch(selectCarFromList(carList))
    dispatch(selectCar(car))
    dispatch(loadAdditionalData(carName, car))
  },
  onSetCarsFilter: (bool) => {
    dispatch(setCarsFilter(bool));
  },
  onOpenModal: (car) => {
    dispatch(selectCar(null, car));
    dispatch(openModal());
  },
  onUnselectCar: (car) => {
    dispatch(selectCar(null, car));
    dispatch(unselectCar(car));
  },
  onUnselectAllCars: () => {
    dispatch(unselectAllCars())
  }
});

CarList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarList);

export default CarList;
