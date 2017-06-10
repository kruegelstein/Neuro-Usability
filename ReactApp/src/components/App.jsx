import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { closeModal } from '../actions/actions.js'
import CarList from './CarList';
import Graph from './Graph';


class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Simulation of Vehicle-2-X Communication</h2>
        <CarList />
        <Modal
          isOpen={this.props.modal}
          contentLabel="Modal"
          >
          <a
            onClick={() => this.props.onCloseModal()}
            >
            <p>Hallo</p>
          </a>
        </Modal>
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
