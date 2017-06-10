import React from 'react';
import { PropTypes } from 'prop-types';

const CarListItem = ({ name, onClick, onEdit, onUnselect, filterSelected, onSelect }) => {
  return (
    <li className="carItem" onClick={onSelect}>
      <a tabIndex="0" className="car" onClick={onClick}>
        {name}
      </a>
      <div className={`iconContainer ${!filterSelected ? 'hidden' : ''}`}>
        <a className="x" onClick={onUnselect}>X</a>
          <a
            className="edit"
            onClick={onEdit}
            >
            <i className="fa fa-car" aria-hidden="true"></i>
          </a>
      </div>
    </li>
  )
}

CarListItem.propTypes = {
  name: PropTypes.string.isRequired,
  filterSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired,
}

export default CarListItem;

// <div className={`iconContainer ${!this.props.filterSelected ? 'hidden' : ''}`}>
