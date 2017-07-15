import ActionTypes from '../constants';

// reducer for the specific graph data and attributes selected

function graphdata(state = {}, action) {
  switch(action.type) {
    // submitting options
    case ActionTypes.SubmitOptions: {
      return {
        ...state,
        [action.payload.car]: {
          carId: action.payload.car,
          settings: action.payload.form
        }
      }
    }
    // unselecting a car
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
    // unselecting all cars
    case ActionTypes.UnselectAllCars: {
      return {}
    }
    default:
      return state
  }
}

export default graphdata;
