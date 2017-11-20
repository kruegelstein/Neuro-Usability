import ActionTypes from '../ActionTypes.js';

const initialState = {}

const result = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.SubmitBad1:
  case ActionTypes.SubmitGood: {
    const id = action.payload.id
    const name = action.payload.name
    const level = action.payload.level
    const letters = action.payload.letters
    return {
      ...state,
      [id]: {
        id: id,
        name: name,
        level: level,
        selectedLetters: letters
      }
    }
  }
  default:
      return { ...state }
  }
}

export default result;
