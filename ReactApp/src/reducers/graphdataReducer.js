import ActionTypes from '../constants';

function graphdata(state = {}, action) {
  switch(action.type) {
    case ActionTypes.SubmitOptions: {
      return {
        ...state,
        [action.payload.car]: {
          carId: action.payload.car,
          attributes: {
            ...state,
            ...Object.keys(action.payload.form).map(a => {
              if(action.payload.form[a].selected) {
                return {
                  name: action.payload.form[a].name,
                  graph: action.payload.form[a].graph,
                  color: action.payload.form[a].color
                }
              }
            })
          }
        }
      }
    }
    // case ActionTypes.SelectCar: {
    //   return {
    //     ...state,
    //     [action.payload.car]: {
    //       carId: action.payload.car,
    //       attributes: {
    //         "speed": {
    //           graph: "line",
    //           color: "Blue"
    //         }
    //       }
    //     }
    //   }
    // }
    // case ActionTypes.UnselectCar: {
    //   return {
    //     ...state,
    //     ...Object.keys(state).map(c => {
    //       if(state[c].carId === action.payload.car) {
    //         delete state[action.payload.car]
    //       } else {
    //         return state[c]
    //       }
    //     })
    //   }
    // }
    default:
      return state
  }
}

export default graphdata;
