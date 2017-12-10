import ActionTypes from '../ActionTypes.js';
import { calculateLetterError } from '../helpers/helpers.js';

const initialState = {}

const result = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.Submit: {
    // General
    const id = action.payload.id
    const name = action.payload.name
    const level = action.payload.level
    // Times
    const time1 = action.payload.time1
    const time2 = action.payload.time2
    const time3 = action.payload.time3
    const time4 = action.payload.time4
    const time5 = action.payload.time5
    let timeTotal = time1 + time2 + time3 + time4 + time5
    timeTotal = parseFloat(timeTotal.toFixed(2))
    // Selected letters per round
    const selectedLetters1 = action.payload.selectedLetters1
    const selectedLetters2 = action.payload.selectedLetters2
    const selectedLetters3 = action.payload.selectedLetters3
    const selectedLetters4 = action.payload.selectedLetters4
    const selectedLetters5 = action.payload.selectedLetters5
    // Letter to find in each round
    const letter1 = action.payload.letter1
    const letter2 = action.payload.letter2
    const letter3 = action.payload.letter3
    const letter4 = action.payload.letter4
    const letter5 = action.payload.letter5
    // Errors for letters
    const letterErrors1 = calculateLetterError(selectedLetters1, letter1)
    const letterErrors2 = calculateLetterError(selectedLetters2, letter2)
    const letterErrors3 = calculateLetterError(selectedLetters3, letter3)
    const letterErrors4 = calculateLetterError(selectedLetters4, letter4)
    const letterErrors5 = calculateLetterError(selectedLetters5, letter5)
    const totalLetterErrors = letterErrors1 + letterErrors2 + letterErrors3 + letterErrors4 + letterErrors5
    // Clcks in each round
    const clicks1 = action.payload.clicks1
    const clicks2 = action.payload.clicks2
    const clicks3 = action.payload.clicks3
    const clicks4 = action.payload.clicks4
    const clicks5 = action.payload.clicks5
    // AttrakDiff
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
        round1: {
          time: time1,
          letterToFind: letter1,
          selectedLetters: selectedLetters1,
          letterErrors: letterErrors1,
        },
        round2: {
          time: time2,
          letterToFind: letter2,
          selectedLetters: selectedLetters2,
          letterErrors: letterErrors2,
        },
        round3: {
          time: time3,
          letterToFind: letter3,
          selectedLetters: selectedLetters3,
          letterErrors: letterErrors3,
        },
        round4: {
          time: time4,
          letterToFind: letter4,
          selectedLetters: selectedLetters4,
          letterErrors: letterErrors4,
        },
        round5: {
          time: time5,
          letterToFind: letter4,
          selectedLetters: selectedLetters5,
          letterErrors: letterErrors5,
        },
        total: {
          time: timeTotal,
          letterErrors: totalLetterErrors,
        },
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
