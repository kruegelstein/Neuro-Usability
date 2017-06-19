import { normalizeCars } from '../schema';
import { getValue, mapObject, filterObject } from '../helper/helper';
import ActionTypes from '../constants';

export const carHandler = (state = {}, action = {}) => {
  switch (action.type) {
  case ActionTypes.getCarsDataFullfilled : {
    return {
      ...state,
      timestamps: action.payload.timestamps
    };
  }
  default:
    return { ...state };
  }
};


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
    return mapObject(state, (_, car) => carHandler(car, action));
  }
  default:
      return { ...state }
  }
}

export default cars;
