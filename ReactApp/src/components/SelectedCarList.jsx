import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { deselectCar, deselectAllCars, selectCar, openModal } from '../actions/actions.js'
import SelectedCar from './SelectedCar';

class SelectedCarList extends Component {
  render() {
    return (
      <div className="selCarList col-md-3">
        <h4 className="selCarHeader">Selected Cars</h4>
        <a onClick={() => this.props.onDeselectAllCars()}>
          <p>Deselect all</p>
        </a>
        <div className="selCarContainer">
          {
            this.props.selectedCars.map((sCar) => {
              return (
                <SelectedCar
                  key={sCar.index}
                  name={sCar.name}
                  onClick={() =>
                    this.props.onDeselectCar(sCar.index)}
                  onEdit={() => this.props.onOpenModal(sCar.index)}
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
  onDeleteSelectedCar: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
}

const mapStateToProps = (state, _ownProps) => {
  let selectedCars = [];
  const carIds = state.navigation.selected.cars;
  selectedCars = carIds.map(cId => state.cars[cId]);
  return {
    selectedCars,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onDeselectCar: (car) => {
    dispatch(selectCar(car));
    dispatch(deselectCar(car));
  },
  onOpenModal: (car) => {
    dispatch(selectCar(car));
    dispatch(openModal());
  },
  onDeselectAllCars: () => {
    dispatch(deselectAllCars())
  }
});

SelectedCarList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedCarList);

export default SelectedCarList;
