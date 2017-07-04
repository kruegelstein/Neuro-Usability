import ActionTypes from '../constants';

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
    default:
      return state
  }
}

export default series;
