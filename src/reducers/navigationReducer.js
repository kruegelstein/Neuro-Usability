import ActionTypes from '../ActionTypes';

const initialState = {
  intro: true,
  good: false,
  bad: false,
  admin: false,
  rating: false,
  demographics: false,
  thanks: false
}

const navigation = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.SelectIntro: {
    return initialState
  }
  case ActionTypes.SelectThanks: {
    return {
      ...state,
      demographics: false,
      thanks: true
    }
  }
  case ActionTypes.SelectAdmin: {
    return {
      ...state,
      intro: false,
      admin: true
    }
  }
  case ActionTypes.SelectDemographics: {
    return {
      ...state,
      rating: false,
      demographics: true
    }
  }
  case ActionTypes.SelectRating: {
    return {
      intro: false,
      good: false,
      bad: false,
      admin: false,
      demographics: false,
      rating: true,
    }
  }
  case ActionTypes.SelectGood: {
    return {
      ...state,
      intro: false,
      good: true
    }
  }
  case ActionTypes.SelectBad: {
    return {
      ...state,
      intro: false,
      bad: true
    }
  }
  default:
      return { ...state }
  }
}

export default navigation;
