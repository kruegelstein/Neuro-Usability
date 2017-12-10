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
    selectedIndizes: [],
    clicks: 0
  },
  round2: {
    letterToFind: '',
    timeForRound: null,
    selectedIndizes: [],
    clicks: 0
  },
  round3: {
    letterToFind: '',
    timeForRound: null,
    selectedIndizes: [],
    clicks: 0
  },
  round4: {
    letterToFind: '',
    timeForRound: null,
    selectedIndizes: [],
    clicks: 0
  },
  round5: {
    letterToFind: '',
    timeForRound: null,
    selectedIndizes: [],
    clicks: 0
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
  case ActionTypes.RecognizeClick: {
    const round = action.payload.round
    if(round === 1) {
      return {
        ...state,
        round1: {
          ...state.round1,
          clicks: state.round1.clicks + 1
        }
      }
    } else if(round === 2){
      return {
        ...state,
        round2: {
          ...state.round2,
          clicks: state.round2.clicks + 1
        }
      }
    } else if(round === 3){
      return {
        ...state,
        round3: {
          ...state.round3,
          clicks: state.round3.clicks + 1
        }
      }
    } else if(round === 4){
      return {
        ...state,
        round4: {
          ...state.round4,
          clicks: state.round4.clicks + 1
        }
      }
    } else if(round === 5){
      return {
        ...state,
        round5: {
          ...state.round5,
          clicks: state.round5.clicks + 1
        }
      }
    } else {
      return {
        ...state
      }
    }
  }
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
      round4: {
        ...state.round4,
        letterToFind: alphabetBasic[action.payload.index4]
      },
      round5: {
        ...state.round5,
        letterToFind: alphabetBasic[action.payload.index5]
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
  case ActionTypes.SelectRound4: {
    return {
      ...state,
      round: 4
    }
  }
  case ActionTypes.SelectRound5: {
    return {
      ...state,
      round: 5
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
    } else if(round === 4){
      return {
        ...state,
        round4: {
          ...state.round4,
          selectedIndizes: state.round4.selectedIndizes.filter(n => n !== index)
        }
      }
    } else if(round === 5){
      return {
        ...state,
        round5: {
          ...state.round5,
          selectedIndizes: state.round5.selectedIndizes.filter(n => n !== index)
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
    } else if(round === 4){
      return {
        ...state,
        round4: {
          ...state.round4,
          selectedIndizes: state.round4.selectedIndizes.concat(index)
        }
      }
    } else if(round === 5){
      return {
        ...state,
        round5: {
          ...state.round5,
          selectedIndizes: state.round5.selectedIndizes.concat(index)
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
    } else if(round === 4){
      return {
        ...state,
        round4: {
          ...state.round4,
          timeForRound: time - state.round3.timeForRound - state.round2.timeForRound - state.round1.timeForRound
        }
      }
    } else if(round === 5){
      return {
        ...state,
        round5: {
          ...state.round5,
          timeForRound: time - state.round4.timeForRound - state.round3.timeForRound - state.round2.timeForRound - state.round1.timeForRound
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
