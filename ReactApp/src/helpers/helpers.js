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
