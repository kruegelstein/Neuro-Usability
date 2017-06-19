import React, { Component } from 'react';
import Chart from 'chart.js'
import Highcharts from 'highcharts'
import GraphTest from '../scripts/Graph_Test'


class Graph extends Component {
  // componentDidMount() {
  //   var lineChartData = {
  //   labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
  //   datasets: [{
  //       fillColor: "rgba(220,220,220,0)",
  //       strokeColor: "rgba(220,180,0,1)",
  //       pointColor: "rgba(220,180,0,1)",
  //       data: [20, 30, 80, 20, 40, 10, 60]
  //   }, {
  //       fillColor: "rgba(151,187,205,0)",
  //       strokeColor: "rgba(151,187,205,1)",
  //       pointColor: "rgba(151,187,205,1)",
  //       data: [60, 10, 40, 30, 80, 30, 20]
  //   }]
  //
  //   }
  //
  //   Chart.defaults.global.animationSteps = 50;
  //   Chart.defaults.global.tooltipYPadding = 16;
  //   Chart.defaults.global.tooltipCornerRadius = 0;
  //   Chart.defaults.global.tooltipTitleFontStyle = "normal";
  //   Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
  //   Chart.defaults.global.animationEasing = "easeOutBounce";
  //   Chart.defaults.global.responsive = true;
  //   Chart.defaults.global.scaleLineColor = "black";
  //   Chart.defaults.global.scaleFontSize = 16;
  //
  //   var ctx = document.getElementById("chart").getContext("2d");
  //   var LineChartDemo = new Chart(ctx).Line(lineChartData, {
  //       pointDotRadius: 10,
  //       bezierCurve: false,
  //       scaleShowVerticalLines: false,
  //       scaleGridLineColor: "black"
  //   });
  // }
  // graph() {
  //   var myChart = Highcharts.chart('container', {
  //       chart: {
  //           type: 'bar'
  //       },
  //       title: {
  //           text: 'Fruit Consumption'
  //       },
  //       xAxis: {
  //           categories: ['Apples', 'Bananas', 'Oranges']
  //       },
  //       yAxis: {
  //           title: {
  //               text: 'Fruit eaten'
  //           }
  //       },
  //       series: [{
  //           name: 'Jane',
  //           data: [1, 0, 4]
  //       }, {
  //           name: 'John',
  //           data: [5, 7, 3]
  //       }]
  //   });
  // }

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
