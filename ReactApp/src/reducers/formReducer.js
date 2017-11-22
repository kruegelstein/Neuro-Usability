import ActionTypes from '../ActionTypes.js';

const initialState = {
  id: '',
  name: '',
  level: '',
  timeGood: '',
  selectedLetters: [],
}

const form = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.ChangeForm: {
    if(action.payload.field === 'name') {
      return {
        ...state,
        name: action.payload.value,
      }
    }
  }
  case ActionTypes.SubmitUserId: {
    return {
      ...state,
      id: action.payload.id 
    }
  }
  case ActionTypes.SelectLetter: {
    const letter = [action.payload.letter]
    return {
      ...state,
      selectedLetters: state.selectedLetters.concat(letter)
    }
  }
  case ActionTypes.SaveTime: {
    const time = action.payload.time
    return {
      ...state,
      timeGood: time
    }
  }
  case ActionTypes.SelectIntro: {
    return initialState
  }
  case ActionTypes.SelectGood: {
    return {
      ...state,
      level: 'good'
    }
  }
  case ActionTypes.SelectBad1: {
    return {
      ...state,
      level: 'bad1'
    }
  }
  case ActionTypes.SelectBad2: {
    return {
      ...state,
      level: 'bad2'
    }
  }
  default:
      return { ...state }
  }
}

export default form;
