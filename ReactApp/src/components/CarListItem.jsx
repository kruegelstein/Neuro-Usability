import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const CarListItem = ({ name }) => {
  return (
    <div className="carItem">
      <h4 className="carItemText">{name}</h4>
    </div>
  )
}

CarListItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CarListItem;
