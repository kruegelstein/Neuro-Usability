import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { deleteSelectedCar, selectCar, openModal } from '../actions/actions.js'
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
                  onClick={() =>
                    this.props.onDeleteSelectedCar(sCar.index)}
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
  onDeleteSelectedCar: (car) => {
    dispatch(selectCar(car));
    dispatch(deleteSelectedCar(car));
  },
  onOpenModal: (car) => {
    dispatch(selectCar(car));
    dispatch(openModal());
  },
});

SelectedCarList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedCarList);

export default SelectedCarList;
