import ActionTypes from '../constants';

// reducer for all cars
const initialState = {
  id: null,
  name: null,
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.AddUserSuccess: {
    return {
      ...state,
      id: action.payload.data.id,
      name: action.payload.data.name,
    }
  }
  default:
      return { ...state }
  }
}

export default user;
