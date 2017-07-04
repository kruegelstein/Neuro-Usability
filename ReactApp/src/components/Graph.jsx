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

  // building series
  let series = []
  if(Object.keys(state.graphdata).length !== 0) {
    let i = 0

    for(i ; i < Object.keys(state.graphdata).length; i+1) {
      // for all selected cars
      // get the selected attibutes with their values for color and graph-type
      const getData = (carId, name) => {
        let allCars = state.cars
        let latKey = '1000000000100000001'
        let lngKey = '1000000000100000002'
        let headingKey = '1000000000100000004'
        let speedKey = '1000000000100000005'
        let oddeKey = '40080001'
        let odrKey = '40080002'
        let oddiKey = '40080003'
        let pfKey = '40108'
        let baKey = '40051'
        let data = []
        switch(name) {
          case 'Lat':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(latKey) ? data.push(Number(allCars[carId].timestamps[key][latKey])) : data.push(null)
            })
            return data
          case 'Lng':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(lngKey) ? data.push(Number(allCars[carId].timestamps[key][lngKey])) : data.push(null)
            })
            return data
          case 'Heading':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(headingKey) ? data.push(Number(allCars[carId].timestamps[key][headingKey])) : data.push(null)
            })
            return data
          case 'Speed':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(speedKey) ? data.push(Number(allCars[carId].timestamps[key][speedKey])) : data.push(null)
            })
            return data
          case 'simTD_ObjectDetection_Detected':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(oddeKey) ? data.push(Number(allCars[carId].timestamps[key][oddeKey])) : data.push(null)
            })
            return data
          case 'simTD_ObjectDetection_RelativeSpeed':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(odrKey) ? data.push(Number(allCars[carId].timestamps[key][odrKey])) : data.push(null)
            })
            return data
          case 'simTD_ObjectDetection_Distance':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(oddiKey) ? data.push(Number(allCars[carId].timestamps[key][oddiKey])) : data.push(null)
            })
            return data
          case 'pedalForce':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(pfKey) ? data.push(Number(allCars[carId].timestamps[key][pfKey])) : data.push(null)
            })
            return data
          case 'brakeActuation':
            Object.keys(allCars[carId].timestamps).forEach(key => {
              allCars[carId].timestamps[key].hasOwnProperty(baKey) ? data.push(Number(allCars[carId].timestamps[key][baKey])) : data.push(null)
            })
            return data
          default:
            return data
        }
      }

      Object.keys(state.graphdata).map(g => {
          let settings = state.graphdata[g].settings
          Object.keys(settings).map(s => {
            if(settings[s].selected === true) {
              const carId = state.graphdata[g].carId
              const name = settings[s].name
              const color = settings[s].color
              const type = settings[s].graph.toLowerCase()
              const data = getData(carId, name)
              const attribute = {
                name: name,
                color: color,
                type: type,
                data: data
              }
              series.push(attribute)
            }
          })
        })
      i++
    }
    // series = series
    // console.log('series', mySeries);

  }
  console.log('series', series);
  config['series'] =  series
  console.log('config', config);


  return {
    config,
    // selectedCars,
  };
};

Graph = connect(
  mapStateToProps,
  null,
)(Graph);

export default Graph;
