import ActionTypes from '../constants';

// reducer for all cars
const initialState = {
  testing: true,
  count: 0
}

const test = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.Test: {
    return {
      ...state,
      testing: action.payload
    }
  }
  case ActionTypes.SetTestSuccess: {
    return {
      ...state,
      count: count+1
    }
  }
  default:
      return { ...state }
  }
}

export default test;
