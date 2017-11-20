import ActionTypes from '../ActionTypes.js';

const initialState = {
  id: '',
  name: '',
  selectedLetters: [],
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
  case ActionTypes.SelectLetter: {
    const letter = [action.payload.letter]
    return {
      ...state,
      selectedLetters: state.selectedLetters.concat(letter)
    }
  }
  case ActionTypes.SelectIntro: {
    const letter = [action.payload.letter]
    return initialState
  }
  default:
      return { ...state }
  }
}

export default form;
