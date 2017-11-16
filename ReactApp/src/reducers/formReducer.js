import ActionTypes from '../ActionTypes.js';

const initialState = {
  id: '',
  name: '',
  interactions: {
    
  }
}

const form = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.ChangeForm: {
    if(action.payload.field === 'id') {
      return {
        ...state,
        id: action.payload.value,
      }
    }
    if(action.payload.field === 'name') {
      return {
        ...state,
        name: action.payload.value,
      }
    }
  }
  default:
      return { ...state }
  }
}

export default form;
