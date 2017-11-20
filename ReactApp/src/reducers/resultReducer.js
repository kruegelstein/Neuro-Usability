import ActionTypes from '../ActionTypes.js';

const initialState = {}

const result = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.SubmitGood: {
    const id = action.payload.id
    const name = action.payload.name
    const letters = action.payload.letters
    return {
      ...state,
      [id]: {
        id: id,
        name: name,
        selectedLetters: letters
      }
    }
  }
  default:
      return { ...state }
  }
}

export default result;
