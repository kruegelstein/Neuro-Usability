import ActionTypes from '../constants';


const initial = {
  chart: {
      renderTo: 'graph',
      type: 'line',
      zoomtype: 'xy'
  },
  title: {
      text: 'Graphs'
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
      data: [1, 0, 400],
      color: 'red',
      type: 'bar'
  }, {
      name: 'PosX',
      data: [5, 100, 3],
      color: 'green'
  }]
};

function test(
  state = { ...initial } , action = {}) {
    switch(action.type) {
      default:
        return state
    }
}

export default test;
