import React, { Component } from 'react';
import Car from './Car';

class SelectedCarList extends Component {
  render() {
    return (
      <div className="selCarList col-md-3">
        <h4 className="selCarHeader">Selected Cars</h4>
        <div className="selCarContainer">
          <Car />
        </div>
      </div>
    )
  }
}

export default SelectedCarList;
