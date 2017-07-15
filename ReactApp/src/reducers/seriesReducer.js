import ActionTypes from '../constants';

// reducer for specific series

let initial = {
  series: []
}

function series(state = { ...initial }, action) {
  switch(action.type) {
    case ActionTypes.GenerateSeriesSuccess:
    let series = state.series
      if(series.length === 0) {
        series = action.payload.data
      } else {
        let i = 0
        for(i; i < action.payload.data.length; i++) {
          if(!series.map(s => s.name).includes(action.payload.data[i].name)) {
            series.push(action.payload.data[i])
          }
        }
      }
      return {
        ...state,
        series: series
      }
    case ActionTypes.UnselectCar:
      let i = 0
      for(i; i < state.series.length; i++) {
        if(state.series[i].car === action.payload.name){
          let index = state.series.indexOf(state.series[i])
          console.log('index', index);
          state.series.splice(index, 1)
        }
      }
      return {
        ...state,
        series: state.series
      }
    case ActionTypes.UnselectAllCars:
      return { ...initial }
    default:
      return state
  }
}

export default series;
