import ActionTypes from '../constants';

// reducer for all cars
const initialState = {
  id: null,
  name: null,
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
  default:
      return { ...state }
  }
}

export default user;
