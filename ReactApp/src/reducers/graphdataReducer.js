import ActionTypes from '../constants';

function graphdata(state = {}, action) {
  switch(action.type) {
    case ActionTypes.SelectCar: {
      return {
        ...state,
        [action.payload.car]: {
          carId: action.payload.car,
          attributes: {
            "speed": {
              graph: "line",
              color: "Blue"
            }
          }
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
    default:
      return state
  }
}

export default graphdata;
