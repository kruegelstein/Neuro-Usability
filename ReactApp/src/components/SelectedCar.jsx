import React from 'react';
import { PropTypes } from 'prop-types';

const SelectedCar = ({ name, onClick }) => {
  const onCarClickHandler = (event) => {
    onClick(event);
  }
  return (
    <div className="carContainer">
      <div className="carHeader">
        <h6 className="carName">{name}</h6>
        <a className="x" onClick={onCarClickHandler}>X</a>
      </div>
      <div className="carBody">
        <div className="iconContainer">
          <a>
            <i className="fa fa-car" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

SelectedCar.propTypes = {
  name: PropTypes.string.isRequired,
}

export default SelectedCar;
