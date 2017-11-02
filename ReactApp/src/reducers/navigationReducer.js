import ActionTypes from '../constants';

const initialState = {
  intro: false,
  stage: 1
}

const navigation = (state = initialState, action = {}) => {
  switch (action.type) {
  case ActionTypes.AddUserSuccess: {
    return {
      ...state,
      intro: false,
      stage: 1
    }
  }
  default:
      return { ...state }
  }
}

export default navigation;
