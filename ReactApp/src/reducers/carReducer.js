import { normalizeCars } from '../schema';
import ActionTypes from '../constants';

const cars = (state = {}, action = {}) => {
  switch (action.type) {
  case 'GET_CARS_FULFILLED': {
      return {
        ...state,
        ...action.data,
      }
    }
  default:
      return { ...state }
  }
}

export default cars;
