import ActionTypes from '../ActionTypes.js';

const initialState = {}

const result = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.Submit: {
    console.log('###', action.payload)
    const id = action.payload.id
    const name = action.payload.name
    const level = action.payload.level
    const time1 = action.payload.time1
    const time2 = action.payload.time2
    const time3 = action.payload.time3
    const selectedLetters1 = action.payload.selectedLetters1
    const selectedLetters2 = action.payload.selectedLetters2
    const selectedLetters3 = action.payload.selectedLetters3
    return {
      ...state,
      [id]: {
        id: id,
        name: name,
        level: level,
        timeForRound1: time1,
        timeForRound2: time2,
        timeForRound3: time3,
        selectedLettersRound1: selectedLetters1,
        selectedLettersRound2: selectedLetters2,
        selectedLettersRound3: selectedLetters3,
      }
    }
  }
  default:
      return { ...state }
  }
}

export default result;
