import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getCars, setCarsFilter, unselectCar, selectCarFromList, unselectAllCars, selectCar, openModal, filterSelected } from '../actions/actions.js'
import CarListItem from './CarListItem';

class CarList extends Component {
  componentDidMount() {
    this.props.loadCarsFromDB();
  }

  render() {
    return (
      <div className="list col-md-3">
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
                    key={car.index}
                    name={car.name}
                    onClick={() => {
                        this.props.onSelectCarFromList(
                        this.props.selectedCars.filter(c => c !== car.index).concat(car.index))
                      }
                    }
                    onEdit={() => this.props.onOpenModal(car.index)}
                    onUnselect={() => this.props.onUnselectCar(car.index)}
                    onSelect= {() => this.props.onSelectCar(car.index)}
                    filterSelected={this.props.filterSelected}
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
  console.log(!filterSelected);

  if(!state.navigation.selected.filterSelected) {
    const carIds = Object.keys(state.cars)
    viewedCars = carIds.map(cId => state.cars[cId]);
  } else {
    const carIds = state.navigation.selected.cars || [];
    viewedCars = carIds.map(cId => state.cars[cId]);
    console.log(viewedCars);
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
  onSelectCarFromList: (car) => {
    dispatch(selectCarFromList(car))
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
