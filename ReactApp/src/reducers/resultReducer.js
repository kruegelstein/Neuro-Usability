import ActionTypes from '../ActionTypes.js';

const initialState = {}

const result = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.Submit: {
    const id = action.payload.id
    const name = action.payload.name
    const level = action.payload.level
    const timeGood = action.payload.timeGood
    const letters = action.payload.letters
    return {
      ...state,
      [id]: {
        id: id,
        name: name,
        level: level,
        timeGood: timeGood,
        selectedLetters: letters
      }
    }
  }
  default:
      return { ...state }
  }
}

export default result;
