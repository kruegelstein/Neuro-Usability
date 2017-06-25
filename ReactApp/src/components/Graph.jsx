import React, { Component } from 'react';
import Chart from 'chart.js'
import Highcharts from 'highcharts'
import GraphTest from '../scripts/Graph_Test'


class Graph extends Component {

  render() {

    return (
      <div className="col-sm-12 col-md-8 col-lg-8">
        <canvas id="chart" width="00" height="00">
          <script>
            {GraphTest}
          </script>
        </canvas>
      </div>
    )
  }
}

export default Graph;
