import ActionTypes from '../constants';

function graphdata(state = {}, action) {
  switch(action.type) {
    case ActionTypes.SubmitOptions: {
      return {
        ...state,
        [action.payload.car]: {
          carId: action.payload.car,
          settings: action.payload.form
        }
      }
    }
    case ActionTypes.UnselectCar: {
      return {
        ...state,
        ...Object.keys(state).map(c => {
          if(state[c].carId === action.payload.car) {
            delete state[action.payload.car]
          } else {
            return state[c]
          }
        })
      }
    }
    case ActionTypes.UnselectAllCars: {
      return {}
    }
    default:
      return state
  }
}

export default graphdata;
