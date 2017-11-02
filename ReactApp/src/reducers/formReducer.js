import ActionTypes from '../constants';

const initialState = {
  id: '',
  name: '',
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
  case ActionTypes.AddUser: {
    return { ...initialState }
  }
  default:
      return { ...state }
  }
}

export default form;
