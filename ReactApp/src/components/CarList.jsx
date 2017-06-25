import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import {
  getCars, setCarsFilter,
  unselectCar, unselectAllCars,
  selectCar, openModal,
  filterSelected, loadAdditionalData } from '../actions/actions.js'
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
          <p>All ({this.props.numOfAllCars})</p>
        </a>
        <a
          onClick={() => this.props.onSetCarsFilter(true)}
        >
          <p>Selected ({this.props.numOfSelCars})</p>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className="col-sm-12 col-md-2 col-lg-2">
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
                    onEdit={() => this.props.onOpenModal(car.id)}
                    onUnselect={() => this.props.onUnselectCar(car.id)}
                    onClick={() => this.props.onSelectCar(car.id, car.name)}
                    filterSelected={this.props.filterSelected}
                    isSelected={Object.keys(this.props.cars).map(a => {
                      if(this.props.cars[a].selected === 1) {
                        return this.props.cars[a].id
                      } else {
                        return -1
                      }
                    }).includes(car.id)}
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
  onSetCarsFilter: PropTypes.func.isRequired,
  onUnselectCar: PropTypes.func.isRequired,
  onUnselectAllCars: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
}

const mapStateToProps = (state, _ownProps) => {
  let cars = state.cars;
  let viewedCars = [];
  let headerText = "Cars";

  if(!state.navigation.selected.filterSelected) {
    const carIds = Object.keys(cars)
    viewedCars = carIds.map(cId => cars[cId]);
  } else {
    const carIds = Object.keys(cars).filter(c => cars[c].selected === 1) || [];
    viewedCars = carIds.map(cId => cars[cId]);
    headerText = "Selected Cars";
  }
  const numOfAllCars = Object.keys(cars).length
  const numOfSelCars = Object.keys(cars).filter(a => cars[a].selected === 1).length

  return {
    cars,
    headerText,
    viewedCars,
    filterSelected: state.navigation.selected.filterSelected,
    numOfAllCars,
    numOfSelCars,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  loadCarsFromDB: () => {
    dispatch(getCars());
  },
  onSelectCar: (car, carName) => {
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
