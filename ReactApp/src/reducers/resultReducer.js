import ActionTypes from '../ActionTypes.js';

const initialState = {}

const result = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.Submit: {
    const id = action.payload.id
    const name = action.payload.name
    const level = action.payload.level
    const time1 = action.payload.time1
    const time2 = action.payload.time2
    const time3 = action.payload.time3
    const time4 = action.payload.time4
    const time5 = action.payload.time5
    let timeTotal = time1 + time2 + time3 + time4 + time5
    timeTotal = parseFloat(timeTotal.toFixed(2))
    const selectedLetters1 = action.payload.selectedLetters1
    const selectedLetters2 = action.payload.selectedLetters2
    const selectedLetters3 = action.payload.selectedLetters3
    const selectedLetters4 = action.payload.selectedLetters4
    const selectedLetters5 = action.payload.selectedLetters5
    const letter1 = action.payload.letter1
    const letter2 = action.payload.letter2
    const letter3 = action.payload.letter3
    const letter4 = action.payload.letter4
    const letter5 = action.payload.letter5
    const clicks1 = action.payload.clicks1
    const clicks2 = action.payload.clicks2
    const clicks3 = action.payload.clicks3
    const clicks4 = action.payload.clicks4
    const clicks5 = action.payload.clicks5
    const einfach = action.payload.einfach
    const hässlich = action.payload.hässlich
    const praktisch = action.payload.praktisch
    const stilvoll = action.payload.stilvoll
    const voraussagbar = action.payload.voraussagbar
    const minderwertig = action.payload.minderwertig
    const phantasielos = action.payload.phantasielos
    const gut = action.payload.gut
    const verwirrend = action.payload.verwirrend
    const lahm = action.payload.lahm
    return {
      ...state,
      [id]: {
        id: id,
        name: name,
        level: level,
        timeForRound1: time1,
        timeForRound2: time2,
        timeForRound3: time3,
        timeForRound4: time4,
        timeForRound5: time5,
        timeTotal: timeTotal,
        clicksForRound1: clicks1,
        clicksForRound2: clicks2,
        clicksForRound3: clicks3,
        clicksForRound4: clicks4,
        clicksForRound5: clicks5,
        selectedLettersRound1: selectedLetters1,
        selectedLettersRound2: selectedLetters2,
        selectedLettersRound3: selectedLetters3,
        selectedLettersRound4: selectedLetters4,
        selectedLettersRound5: selectedLetters5,
        letterRound1: letter1,
        letterRound2: letter2,
        letterRound3: letter3,
        letterRound4: letter4,
        letterRound5: letter5,
        einfach: einfach,
        hässlich: hässlich,
        praktisch: praktisch,
        stilvoll: stilvoll,
        voraussagbar: voraussagbar,
        minderwertig: minderwertig,
        phantasielos: phantasielos,
        gut: gut,
        verwirrend: verwirrend,
        lahm: lahm,
      }
    }
  }
  case ActionTypes.SubmitDemographics: {
    const id = action.payload.id
    const gender = action.payload.gender
    const age = action.payload.age
    const edu = action.payload.edu
    const course = action.payload.course
    return {
      ...state,
      [id]: {
        ...state[id],
        gender: gender,
        age: age,
        edu: edu,
        course: course
      }
    }
  }
  default:
      return { ...state }
  }
}

export default result;
