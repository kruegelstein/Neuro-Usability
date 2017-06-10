import React from 'react';
import { PropTypes } from 'prop-types';

const CarListItem = ({ name, onClick }) => {
  const onCarClickHandler = (event) => {
    onClick(event);
  };
  return (
    <li className="carItem">
      <a tabIndex="0" className="car" onClick={onCarClickHandler}>
        <h4 className="carItemText">{name}</h4>
      </a>
    </li>
  )
}

CarListItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CarListItem;
