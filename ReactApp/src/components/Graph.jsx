import React, { Component } from 'react';
import Chart from 'chart.js'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts'
import GraphTest from '../scripts/Graph_Test'

const config = {

        chart: {
            renderTo: 'graph',
            type: 'line',
            zoomtype: 'xy'
        },
        title: {
            text: 'Dummy Data'
        },
        xAxis: {
            timestamp: ['0', '1', '2']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        series: [{
            name: 'PosY',
            data: [1, 0, 400]
        }, {
            name: 'PosX',
            data: [5, 100, 3]
        }]

};

class Graph extends Component {



  render() {

    return (

      <div className="graph col-sm-12 col-md-9 col-lg-9">
        <ReactHighcharts config = {config}></ReactHighcharts>
      </div>
    )
  }
}

export default Graph;
