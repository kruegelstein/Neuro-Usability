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
  let config = {}

  // get general graph config from state.graphConfig
  let chart = state.graphConfig.chart
  let title = state.graphConfig.title
  let xAxis = state.graphConfig.xAxis
  let yAxis = state.graphConfig.yAxis
  config['chart'] = chart
  config['title'] = title
  config['xAxis'] = xAxis
  config['yAxis'] = yAxis

  // get settings from state.graphdata for each selected car
  let selectedCars = []
  Object.keys(state.cars).map(c => {
    if(state.cars[c].selected === 1) {
      selectedCars.push(state.cars[c])
    }
  })

  let series = []
  let data = []
  console.log(selectedCars[0]);
  if(selectedCars[0] !== undefined) {
    Object.keys(selectedCars[0].timestamps).forEach(key => {
      selectedCars[0].timestamps[key].hasOwnProperty('1000000000100000005') ? data.push(Number(selectedCars[0].timestamps[key]['1000000000100000005'])) : data.push(null)
    })
  }

  if(selectedCars[0] !== undefined) {
    series[0] = {
      name: selectedCars[0].name + 'Speed',
      data: data,
      color: state.graphdata[0].settings[3].color,
      type: 'line',
      turboThreshold: 12032
      // type: state.graphdata[0].settings[3].graph.toLowerCase()
    }
  }

  config['series'] =  series

  // get timestamps from state.cars for all selected cars


  return {
    config,
  };
};

Graph = connect(
  mapStateToProps,
  null,
)(Graph);

export default Graph;
