// Calculates the error concerning letters
export const calculateAbsoluteLetterError = (selectedLetters, letter) => {
  let correct = 0
  selectedLetters.map(l => {
    if(l === letter) {
      correct = correct + 1
    }
  })
  const errorAbsolute = Math.abs(5 - correct)
  return errorAbsolute
}

export const calculatePercentageLetterError = (errorAbsolute) => {
  const errorPercentage = (errorAbsolute / 5) * 100
  return errorPercentage
}

// Calculates the error concerning clicks
export const calaculateDistanceToPerfectClicks = (clicks) => {
  if(clicks === 5) {
    return 0
  } else if(clicks > 5) {
    return clicks - 5
  } else {
    return 5 - clicks
  }
}

export const calaculateTotalDistanceToPerfectClicks = (clicks) => {
  if(clicks === 25) {
    return 0
  } else if(clicks > 25) {
    return clicks - 25
  } else {
    return 25 - clicks
  }
}

// Concatinate 5 objects to one object
export const concatObjects = (obj1, obj2, obj3, obj4, obj5) => {
  const allClickInformation = {
    round1: obj1,
    round2: obj2,
    round3: obj3,
    round4: obj4,
    round5: obj5,
  }
  return allClickInformation
}

// Calculate the time between 2 clicks in each round
