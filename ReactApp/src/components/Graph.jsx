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
        <ReactHighcharts config = {this.props.config}></ReactHighcharts>
      </div>
    )
  }
}

const mapStateToProps = (state, _ownProps) => {
  // Get all the currently seleceted cars in an array
  let selCars = []
  Object.keys(state.cars).map((c , index)=> {
    if(state.cars[c].selected === 1) {
      selCars.push(state.cars[c])
    }
  })
  console.log('selCars', selCars);

  // Get all the currently selected attributes in an array
  let attributes = []
  let config = {}

  return {
    config,
    selCars,
  };
};

Graph = connect(
  mapStateToProps,
  null,
)(Graph);

export default Graph;
