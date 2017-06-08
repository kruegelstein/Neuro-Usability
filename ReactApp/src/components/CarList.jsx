import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { getCars } from '../actions/actions.js'
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
                <CarListItem car={car}/>
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
}

const mapStateToProps = (state, _ownProps) => {
  let cars = null;
  const carIds = Object.keys(state.cars);
  cars = carIds.map(cId => state.cars[cId]);
  return {
    cars,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  loadCarsFromDB: () => {
    dispatch(getCars());
  },
});

CarList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarList);

export default CarList;
