import ActionTypes from '../ActionTypes.js';
import { calculateAbsoluteLetterError, calculatePercentageLetterError, calaculateDistanceToPerfectClicks, calaculateTotalDistanceToPerfectClicks, concatObjects } from '../helpers/helpers.js';

const initialState = {}

const result = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.SelectIntro: {
    return initialState
  }
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
    const absoluteLetterError1 = calculateAbsoluteLetterError(selectedLetters1, letter1)
    const absoluteLetterError2 = calculateAbsoluteLetterError(selectedLetters2, letter2)
    const absoluteLetterError3 = calculateAbsoluteLetterError(selectedLetters3, letter3)
    const absoluteLetterError4 = calculateAbsoluteLetterError(selectedLetters4, letter4)
    const absoluteLetterError5 = calculateAbsoluteLetterError(selectedLetters5, letter5)
    const totalAbsoluteLetterError = absoluteLetterError1 + absoluteLetterError2 + absoluteLetterError3 + absoluteLetterError4 + absoluteLetterError5

    const percentageLetterError1 = calculatePercentageLetterError(absoluteLetterError1)
    const percentageLetterError2 = calculatePercentageLetterError(absoluteLetterError2)
    const percentageLetterError3 = calculatePercentageLetterError(absoluteLetterError3)
    const percentageLetterError4 = calculatePercentageLetterError(absoluteLetterError4)
    const percentageLetterError5 = calculatePercentageLetterError(absoluteLetterError5)
    const totalPercentageLetterError = (totalAbsoluteLetterError / 25) * 100
    // Clicks in each round
    const clicks1 = action.payload.clicks1
    const clicks2 = action.payload.clicks2
    const clicks3 = action.payload.clicks3
    const clicks4 = action.payload.clicks4
    const clicks5 = action.payload.clicks5
    const totalClicks = clicks1 + clicks2 + clicks3 + clicks4 + clicks5
    // Errors for clicks
    const clickError1 = calaculateDistanceToPerfectClicks(clicks1)
    const clickError2 = calaculateDistanceToPerfectClicks(clicks2)
    const clickError3 = calaculateDistanceToPerfectClicks(clicks3)
    const clickError4 = calaculateDistanceToPerfectClicks(clicks4)
    const clickError5 = calaculateDistanceToPerfectClicks(clicks5)
    const totalClickError = calaculateTotalDistanceToPerfectClicks(clicks1 + clicks2 + clicks3 + clicks4 + clicks5)
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
    // ClickInformation
    const clickInformation1 = action.payload.clickInformation1
    const clickInformation2 = action.payload.clickInformation2
    const clickInformation3 = action.payload.clickInformation3
    const clickInformation4 = action.payload.clickInformation4
    const clickInformation5 = action.payload.clickInformation5
    const totalClickInformation = concatObjects(clickInformation1, clickInformation2, clickInformation3, clickInformation4, clickInformation5)

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
          absoluteLetterError: absoluteLetterError1,
          percentageLetterError: `${percentageLetterError1}%`,
          clicks: clicks1,
          distanceToPerfectClicks: clickError1,
          clickInformation: clickInformation1,
        },
        round2: {
          time: time2,
          letterToFind: letter2,
          selectedLetters: selectedLetters2,
          absoluteLetterError: absoluteLetterError2,
          percentageLetterError: `${percentageLetterError2}%`,
          clicks: clicks2,
          distanceToPerfectClicks: clickError2,
          clickInformation: clickInformation2,
        },
        round3: {
          time: time3,
          letterToFind: letter3,
          selectedLetters: selectedLetters3,
          absoluteLetterError: absoluteLetterError3,
          percentageLetterError: `${percentageLetterError3}%`,
          clicks: clicks3,
          distanceToPerfectClicks: clickError3,
          clickInformation: clickInformation3,
        },
        round4: {
          time: time4,
          letterToFind: letter4,
          selectedLetters: selectedLetters4,
          absoluteLetterError: absoluteLetterError4,
          percentageLetterError: `${percentageLetterError4}%`,
          clicks: clicks4,
          distanceToPerfectClicks: clickError4,
          clickInformation: clickInformation4,
        },
        round5: {
          time: time5,
          letterToFind: letter4,
          selectedLetters: selectedLetters5,
          absoluteLetterError: absoluteLetterError5,
          percentageLetterError: `${percentageLetterError5}%`,
          clicks: clicks5,
          distanceToPerfectClicks: clickError5,
          clickInformation: clickInformation5,
        },
        total: {
          time: timeTotal,
          totalAbsoluteLetterError: totalAbsoluteLetterError,
          totalPercentageLetterError: `${totalPercentageLetterError}%`,
          clicks: totalClicks,
          distanceToPerfectClicks: totalClickError,
          totalClickInformation: totalClickInformation,
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
