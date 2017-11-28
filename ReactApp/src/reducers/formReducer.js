import ActionTypes from '../ActionTypes.js';
import { alphabetBasic } from '../constants/alphabet.js';

const initialState = {
  id: '',
  name: '',
  level: '',
  round: null,
  round1: {
    letterToFind: '',
    timeForRound: null,
    selectedLetters: []
  },
  round2: {
    letterToFind: '',
    timeForRound: null,
    selectedLetters: []
  },
  round3: {
    letterToFind: '',
    timeForRound: null,
    selectedLetters: []
  },
  rating: {
    einfach: null,
    hässlich: null,
    praktisch: null,
    stilvoll: null,
    voraussagbar: null,
    minderwertig: null,
    phantasielos: null,
    gut: null,
    verwirrend: null,
    lahm: null,
  }
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
  case ActionTypes.SetLettersToFind: {
    return {
      ...state,
      round1: {
        ...state.round1,
        letterToFind: alphabetBasic[action.payload.index1]
      },
      round2: {
        ...state.round2,
        letterToFind: alphabetBasic[action.payload.index2]
      },
      round3: {
        ...state.round3,
        letterToFind: alphabetBasic[action.payload.index3]
      },
    }
  }
  case ActionTypes.SelectRound2: {
    return {
      ...state,
      round: 2
    }
  }
  case ActionTypes.SelectRound3: {
    return {
      ...state,
      round: 3
    }
  }
  case ActionTypes.SelectLetter: {
    const letter = [action.payload.letter]
    const round = action.payload.round
    if(round === 1) {
      return {
        ...state,
        round1: {
          ...state.round1,
          selectedLetters: state.round1.selectedLetters.concat(letter)
        }
      }
    } else if(round === 2){
      return {
        ...state,
        round2: {
          ...state.round2,
          selectedLetters: state.round2.selectedLetters.concat(letter)
        }
      }
    } else if(round === 3){
      return {
        ...state,
        round3: {
          ...state.round3,
          selectedLetters: state.round3.selectedLetters.concat(letter)
        }
      }
    } else {
      return {
        ...state
      }
    }
  }
  case ActionTypes.SaveTime: {
    const time = action.payload.time
    const round = action.payload.round
    if(round === 1) {
      return {
        ...state,
        round1: {
          ...state.round1,
          timeForRound: time
        }
      }
    } else if(round === 2){
      return {
        ...state,
        round2: {
          ...state.round2,
          timeForRound: time
        }
      }
    } else if(round === 3){
      return {
        ...state,
        round3: {
          ...state.round3,
          timeForRound: time
        }
      }
    } else {
      return {
        ...state
      }
    }
  }
  case ActionTypes.SelectIntro: {
    return initialState
  }
  case ActionTypes.SelectGood: {
    return {
      ...state,
      level: 'good',
      round: 1,
    }
  }
  case ActionTypes.SelectBad: {
    return {
      ...state,
      level: 'bad',
      round: 1,
    }
  }
  default:
      return { ...state }
  }
}

export default form;
