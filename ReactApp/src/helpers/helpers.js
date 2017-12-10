// Calculates the error concerning letters
export const calculateLetterError = (selectedLetters, letter) => {
  let error = 0
  selectedLetters.map(l => {
    if(!(l === letter)) {
      error = error + 1
    }
  })
  if(selectedLetters.length < 5) {
    const notFoundError = 5 - selectedLetters.length
    error = error + notFoundError
  }
  return error
}

// Calculates the error concerning clicks
export const calaculateBasicClickError = (clicks) => {
  if(clicks === 5) {
    return 0
  } else if(clicks > 5) {
    return clicks - 5
  } else {
    return 5 - clicks
  }
}
