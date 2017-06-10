import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getCars, selectCarFromList } from '../actions/actions.js'
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
                  onClick={() => {
                      this.props.onSelectCarFromList(
                      this.props.selectedCars.filter(c => c !== car.index).concat(car.index))
                      console.log(this.props.selectedCars.filter(c => c !== car.index).concat(car.index));
                    }
                  }
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
  onSelectCarFromList: PropTypes.func.isRequired,
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
  onSelectCarFromList: (car) => {
    dispatch(selectCarFromList(car));
  },
});

CarList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarList);

export default CarList;
