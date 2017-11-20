import ActionTypes from '../ActionTypes';

const initialState = {
  intro: false,
  good: false,
  bad1: true,
  bad2: false,
  admin: false,
}

const navigation = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.SelectIntro: {
    return initialState
  }
  case ActionTypes.SelectAdmin: {
    return {
      ...state,
      intro: false,
      admin: true
    }
  }
  case ActionTypes.SelectGood: {
    return {
      ...state,
      intro: false,
      good: true
    }
  }
  case ActionTypes.SelectBad1: {
    return {
      ...state,
      intro: false,
      bad1: true
    }
  }
  case ActionTypes.SelectBad2: {
    return {
      ...state,
      intro: false,
      bad2: true
    }
  }
  default:
      return { ...state }
  }
}

export default navigation;
