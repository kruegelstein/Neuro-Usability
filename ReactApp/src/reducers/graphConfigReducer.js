import ActionTypes from '../constants';


const initial = {
  chart: {
      renderTo: 'graph',
      type: 'line',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      height: 800
  },
  title: {
      text: 'Graphs'
  },
  xAxis: {
      //needs to get the timestamps
      max: null,
  },
  yAxis: {
      title: {
          text: 'Value',
          max: null,
      }
  },
}
//   series: [{
//       name: 'PosY',
//       data: [1, 0, 400],
//       color: 'red',
//       type: 'bar'
//   }, {
//       name: 'PosX',
//       data: [5, 100, 3],
//       color: 'red',
//       type: 'bar'
//   }]
// };

// series
// name: attribute.name
// data: state.cars.timestampsdata
// color: kommt aus graphdata
// type: kommt aus graphdata

function graphConfig(
  state = { ...initial } , action = {}) {
    switch(action.type) {
      default:
        return state
    }
}

export default graphConfig;
