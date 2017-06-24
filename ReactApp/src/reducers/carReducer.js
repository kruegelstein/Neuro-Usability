import { normalizeCars } from '../schema';
import { getValue, mapObject, filterObject } from '../helper/helper';
import ActionTypes from '../constants';


const cars = (state = {}, action = {}) => {
  switch (action.type) {
  case ActionTypes.GetCarsFulfilled: {
    return {
      ...state,
      ...action.data.map((d, index) => {
        return { id: index, name: d}
      }),
    }
  }
  case ActionTypes.getCarsDataFullfilled: {
    return {
      ...state,
      ...Object.keys(state).map(a => {
        if(state[a].name === action.payload.carName){
          return { ...state[a], timestamps: action.payload.timestamps }
        } else {
          return state[a]
        }
      })
    }
  }
  default:
      return { ...state }
  }
}

export default cars;
