import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Button, Radio, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import { closeModal } from '../actions/actions.js'
import CarList from './CarList';
import Graph from './Graph';


class App extends Component {
  showModal() {
    return (
      <Modal
        isOpen={this.props.modal}
        contentLabel="Modal"
        id="modal"
        >
        <div className="editModal">
          {this.showModalHeader()}
          {this.showModalContent()}
          {this.showModalFooter()}
        </div>
      </Modal>
    )
  }

  showModalHeader() {
    return (
      <div className="modalHeader">
        <h4> CARNAME </h4>
        <a

          onClick={() => this.props.onCloseModal()}
          className="modalClose"
        >
          <p>X</p>
        </a>
      </div>
    )
  }

  showModalContent() {
    return (
      <div className="modalContent">
        <div>
          <p>Select attributes to render in graph</p>
          {this.showAttributes()}
        </div>
      </div>
    )
  }
  showAttributes() {
    return (
      <div className="attributesList">
        <form className="attributesForm">
          <li className="attributes">
            <FormGroup className="checkbox" controlId="checked">
              <Radio >Attribute name</Radio>
            </FormGroup>
            <FormGroup className="graph" controlId="graph">
              <DropdownButton className="graphDd" title="Line">
                <MenuItem eventKey="1">Line</MenuItem>
                <MenuItem eventKey="2">Bar</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
            <FormGroup className="color">
              <DropdownButton className="colorDd" title="Line">
                <MenuItem eventKey="1">Blue</MenuItem>
                <MenuItem eventKey="2">Green</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
          </li>
          <li className="attributes">
            <FormGroup className="checkbox" controlId="checked">
              <Radio >Attribute name</Radio>
            </FormGroup>
            <FormGroup className="graph" controlId="graph">
              <DropdownButton className="graphDd" title="Line">
                <MenuItem eventKey="1">Line</MenuItem>
                <MenuItem eventKey="2">Bar</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
            <FormGroup className="color">
              <DropdownButton className="colorDd" title="Line">
                <MenuItem eventKey="1">Blue</MenuItem>
                <MenuItem eventKey="2">Green</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
          </li>
          <li className="attributes">
            <FormGroup className="checkbox" controlId="checked">
              <Radio >Attribute name</Radio>
            </FormGroup>
            <FormGroup className="graph" controlId="graph">
              <DropdownButton className="graphDd" title="Line">
                <MenuItem eventKey="1">Line</MenuItem>
                <MenuItem eventKey="2">Bar</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
            <FormGroup className="color">
              <DropdownButton className="colorDd" title="Line">
                <MenuItem eventKey="1">Blue</MenuItem>
                <MenuItem eventKey="2">Green</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
          </li>
          <li className="attributes">
            <FormGroup className="checkbox" controlId="checked">
              <Radio >Attribute name</Radio>
            </FormGroup>
            <FormGroup className="graph" controlId="graph">
              <DropdownButton className="graphDd" title="Line">
                <MenuItem eventKey="1">Line</MenuItem>
                <MenuItem eventKey="2">Bar</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
            <FormGroup className="color">
              <DropdownButton className="colorDd" title="Line">
                <MenuItem eventKey="1">Blue</MenuItem>
                <MenuItem eventKey="2">Green</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
          </li>
          <li className="attributes">
            <FormGroup className="checkbox" controlId="checked">
              <Radio >Attribute name</Radio>
            </FormGroup>
            <FormGroup className="graph" controlId="graph">
              <DropdownButton className="graphDd" title="Line">
                <MenuItem eventKey="1">Line</MenuItem>
                <MenuItem eventKey="2">Bar</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
            <FormGroup className="color">
              <DropdownButton className="colorDd" title="Line">
                <MenuItem eventKey="1">Blue</MenuItem>
                <MenuItem eventKey="2">Green</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
          </li>
          <li className="attributes">
            <FormGroup className="checkbox" controlId="checked">
              <Radio >Attribute name</Radio>
            </FormGroup>
            <FormGroup className="graph" controlId="graph">
              <DropdownButton className="graphDd" title="Line">
                <MenuItem eventKey="1">Line</MenuItem>
                <MenuItem eventKey="2">Bar</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
            <FormGroup className="color">
              <DropdownButton className="colorDd" title="Line">
                <MenuItem eventKey="1">Blue</MenuItem>
                <MenuItem eventKey="2">Green</MenuItem>
                <MenuItem eventKey="3">...</MenuItem>
                <MenuItem eventKey="4">...</MenuItem>
              </DropdownButton>
            </FormGroup>
          </li>
        </form>
      </div>
    )
  }

  showModalFooter() {
    return (
      <div className="modalFooter">
        <Button
          bsStyle="success"
        >
          Submit
        </Button>
        <Button
          bsStyle="danger"
          onClick={() => this.props.onCloseModal()}
        >
          Cancel
        </Button>
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        <h2>Simulation of Vehicle-2-X Communication</h2>
        <CarList />
        {this.showModal()}
        <Graph />
      </div>
    )
  }
}

App.propTypes = {
  modal: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, _ownProps) => {
  return {
    modal: state.navigation.modal,
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onCloseModal: (car) => {
    dispatch(closeModal());
  },
});

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
