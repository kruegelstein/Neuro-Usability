import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import CarList from './CarList';
import Graph from './Graph';
import SelectedCarList from './SelectedCarList';
import Modal from 'bootstrap'



class CarModal extends React.Component {
//  constructor(props){
  //  super(props);

  //}


   render() {
      var x = 0;
      return (
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <button onClick={x++}>add</button>
              <h1>{x}</h1>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
   }
}
