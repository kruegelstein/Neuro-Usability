import ActionTypes from '../constants';

const initialState = {}

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
