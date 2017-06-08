import React, { Component } from 'react';
// import '../../style/CarListItem.css';

class CarListItem extends Component {
  render() {
    const { email, title } = this.props.goal
    return (
      <div className="carItem">
        <h4 className="carItemText">{title}</h4>
      </div>
    )
  }
}

export default CarListItem;
