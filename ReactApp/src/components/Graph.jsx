import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts'
import GraphTest from '../scripts/Graph_Test'

class Graph extends Component {

  render() {
    return (
      <div className="graph col-sm-12 col-md-9 col-lg-9">
        <ReactHighcharts config={this.props.config}></ReactHighcharts>
      </div>
    )
  }
}

const mapStateToProps = (state, _ownProps) => {
  // Build config

  // get timestamps from state.cars for all selected cars

  // get settings from state.graphdata for each selected car

  // get general graph config from state.graphConfig

  // TODO: build general graph config in state
  return {
    config: state.test,
  };
};

Graph = connect(
  mapStateToProps,
  null,
)(Graph);

export default Graph;
