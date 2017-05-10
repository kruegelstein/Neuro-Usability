import React, { Component } from 'react';
import Chart from 'chart.js'

class Graph extends Component {
  componentDidMount() {
    var ctx = document.getElementById("myChart");
    var doughnutOptions = {
    	//Boolean - Whether we should show a stroke on each segment
    	segmentShowStroke : true,

    	//String - The colour of each segment stroke
    	segmentStrokeColor : "#fff",

    	//Number - The width of each segment stroke
    	segmentStrokeWidth : 2,

    	//The percentage of the chart that we cut out of the middle.
    	percentageInnerCutout : 50,

    	//Boolean - Whether we should animate the chart
    	animation : true,

    	//Number - Amount of animation steps
    	animationSteps : 100,

    	//String - Animation easing effect
    	animationEasing : "easeOutBounce",

    	//Boolean - Whether we animate the rotation of the Doughnut
    	animateRotate : true,

    	//Boolean - Whether we animate scaling the Doughnut from the centre
    	animateScale : true,

    	//Function - Will fire on animation completion.
    	onAnimationComplete : null
    }


    // Doughnut Chart Data
    var doughnutData = [
    	{
    		value: 30,
    		color:"white"
    	},
    	{
    		value : 50,
    		color : "#1789D4"
    	},
    	{
    		value : 100,
    		color : "#CB4B16"
    	},
    	{
    		value : 40,
    		color : "#1F8261"
    	},
    	{
    		value : 120,
    		color : "#FFA500"
    	}

    ]


    //Get the context of the Doughnut Chart canvas element we want to select
    var ctx = document.getElementById("doughnutChart").getContext("2d");

    // Create the Doughnut Chart
    var mydoughnutChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
   }

  render() {

    return (
      <div className="col-md-6">
        <h4>The Graph Component</h4>
        <canvas id="doughnutChart" width="400" height="400"></canvas>
      </div>
    )
  }
}

export default Graph;
