import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import SelectedCar from './SelectedCar';

class SelectedCarList extends Component {
  render() {
    return (
      <div className="selCarList col-md-3">
        <h4 className="selCarHeader">Selected Cars</h4>
        <div className="selCarContainer">
          {
            this.props.selectedCars.map((sCar) => {
              return (
                <SelectedCar
                  key={sCar.index}
                  name={sCar.name}
                  />
              )
            })
          }
        </div>
      </div>
    )
  }
}

SelectedCarList.propTypes = {
  selectedCars: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = (state, _ownProps) => {
  let selectedCars = [];
  const carIds = state.navigation.selected.cars;
  selectedCars = carIds.map(cId => state.cars[cId]);
  return {
    selectedCars,
  };
};

SelectedCarList = connect(
  mapStateToProps,
  null,
)(SelectedCarList);

export default SelectedCarList;
