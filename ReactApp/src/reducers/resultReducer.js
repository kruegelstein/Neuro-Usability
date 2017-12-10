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
    let error1 = clicks1 - 5
    error1 < 0 ? error1 = error1 * -1 : error1 = error1 * 1
    let error2 = clicks2 - 5
    error2 < 0 ? error2 = error2 * -1 : error2 = error2 * 1
    let error3 = clicks3 - 5
    error3 < 0 ? error3 = error3 * -1 : error3 = error3 * 1
    let error4 = clicks4 - 5
    error4 < 0 ? error4 = error4 * -1 : error4 = error4 * 1
    let error5 = clicks5 - 5
    error5 < 0 ? error5 = error5 * -1 : error5 = error5 * 1
    let errorTotal = clicks1 + clicks2 + clicks3 + clicks4 + clicks5 - 25
    errorTotal < 0 ? errorTotal = errorTotal * -1 : errorTotal = errorTotal * 1 
    const errorRate1 = error1 / 5
    const errorRate2 = error2 / 5
    const errorRate3 = error3 / 5
    const errorRate4 = error4 / 5
    const errorRate5 = error5 / 5
    const errorTotalRate = (errorTotal / 25) * 100
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
        errorForRound1: error1,
        errorForRound2: error2,
        errorForRound3: error3,
        errorForRound4: error4,
        errorForRound5: error5,
        totalError: errorTotal,
        errorRateForRound1: errorRate1,
        errorRateForRound2: errorRate2,
        errorRateForRound3: errorRate3,
        errorRateForRound4: errorRate4,
        errorRateForRound5: errorRate5,
        totalRateError: errorTotalRate,
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
