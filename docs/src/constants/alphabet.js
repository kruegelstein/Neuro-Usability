export const alphabetBasic = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export const alphabetx2 = alphabetBasic.concat(alphabetBasic)

export const alphabetx4 = alphabetx2.concat(alphabetx2)

export const alphabetx5 = alphabetx4.concat(alphabetBasic)

export const alphabetGood = alphabetx5.sort(() => Math.random() * 2 - 1)

export const alphabetBad = alphabetGood.map(l => {
  if(Math.floor(Math.random() * (1 - 0 + 1) + 0) === 0) {
    return l.toLowerCase()
  } else return l
})
