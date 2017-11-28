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
    selectedIndizes: []
  },
  round2: {
    letterToFind: '',
    timeForRound: null,
    selectedIndizes: []
  },
  round3: {
    letterToFind: '',
    timeForRound: null,
    selectedIndizes: []
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
  case ActionTypes.DeselectLetter: {
    const index = action.payload.index
    const round = action.payload.round
    if(round === 1) {
      return {
        ...state,
        round1: {
          ...state.round1,
          selectedIndizes: state.round1.selectedIndizes.filter(n => n !== index)
        }
      }
    } else if(round === 2){
      return {
        ...state,
        round2: {
          ...state.round2,
          selectedIndizes: state.round2.selectedIndizes.filter(n => n !== index)
        }
      }
    } else if(round === 3){
      return {
        ...state,
        round3: {
          ...state.round3,
          selectedIndizes: state.round3.selectedIndizes.filter(n => n !== index)
        }
      }
    } else {
      return {
        ...state
      }
    }
  }
  case ActionTypes.SelectLetter: {
    const index = [action.payload.index]
    const round = action.payload.round
    if(round === 1) {
      return {
        ...state,
        round1: {
          ...state.round1,
          selectedIndizes: state.round1.selectedIndizes.concat(index)
        }
      }
    } else if(round === 2){
      return {
        ...state,
        round2: {
          ...state.round2,
          selectedIndizes: state.round2.selectedIndizes.concat(index)
        }
      }
    } else if(round === 3){
      return {
        ...state,
        round3: {
          ...state.round3,
          selectedIndizes: state.round3.selectedIndizes.concat(index)
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
          timeForRound: time - state.round1.timeForRound
        }
      }
    } else if(round === 3){
      return {
        ...state,
        round3: {
          ...state.round3,
          timeForRound: time - state.round2.timeForRound - state.round1.timeForRound
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
