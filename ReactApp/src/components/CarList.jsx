import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {Badge, Button} from 'react-bootstrap';

import {
  getCars, setCarsFilter,
  unselectCar, unselectAllCars,
  selectCar, openModal,
  filterSelected, loadAdditionalData, loadCarsInMongo } from '../actions/actions.js'
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
          <p>All <Badge>{this.props.numOfAllCars}</Badge></p>
        </a>
        <a
          onClick={() => this.props.onSetCarsFilter(true)}
        >
          <p>Selected <Badge>{this.props.numOfSelCars}</Badge></p>
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
              <i className="fa fa-undo" aria-hidden="true"></i>
            </a>
              <span className="header">{this.props.headerText}</span>
          </div>
          <div className="carItemContainer">
            { this.props.viewedCars.map((car) => {
                return (
                  <CarListItem
                    key={car.id}
                    index={car.id}
                    name={car.name}
                    onEdit={() => this.props.onOpenModal(car.id, this.props.graphdata)}
                    onUnselect={() => this.props.onUnselectCar(car.id, car.name)}
                    onClick={() => {
                      if(this.props.cars[car.id].selected === 1) {
                        // show alert because car is already selected
                        alert('This car has already been selected')
                      }else {
                        // select the car since the car is not yet selected
                        this.props.onSelectCar(car.id, this.props.graphdata)
                      }
                    }}
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
        <Button bsSize="small" onClick={() => {
            Object.keys(this.props.cars).map(c => {
              if(this.props.cars[c].selected === 1) {
                this.props.onLoadInMongo(this.props.cars[c].name, this.props.cars[c].timestamps)
              }
            })
          }}>Small button</Button>
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
  // Helpers
  let cars = state.cars;
  let viewedCars = [];
  let headerText = "Cars";

  // Choose which cars are being displayed
  if(!state.navigation.selected.filterSelected) {
    const carIds = Object.keys(cars)
    viewedCars = carIds.map(cId => cars[cId]);
  } else {
    const carIds = Object.keys(cars).filter(c => cars[c].selected === 1) || [];
    viewedCars = carIds.map(cId => cars[cId]);
    headerText = "Selected Cars";
  }

  // Calculate the numbers of all cars and the number of selected cars
  const numOfAllCars = Object.keys(cars).length
  const numOfSelCars = Object.keys(cars).filter(a => cars[a].selected === 1).length

  return {
    graphdata: state.graphdata,
    cars,
    headerText,
    viewedCars,
    filterSelected: state.navigation.selected.filterSelected,
    numOfAllCars,
    numOfSelCars,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onLoadInMongo: (name, timestamps) => {
    dispatch(loadCarsInMongo(name, timestamps))
    // dispatch(loadDataInMongo(id, timestamps))
  },
  loadCarsFromDB: () => {
    dispatch(getCars());
  },
  onSelectCar: (car, graphdata) => {
    dispatch(selectCar(car))
    dispatch(openModal(car, graphdata))
  },
  onSetCarsFilter: (bool) => {
    dispatch(setCarsFilter(bool));
  },
  onOpenModal: (car, graphdata) => {
    dispatch(selectCar(car))
    dispatch(openModal(car, graphdata))

  },
  onUnselectCar: (car, carName) => {
    dispatch(unselectCar(car, carName));
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
