import ActionTypes from '../ActionTypes.js';

const initialState = {
  difficulty: null,
  attractiveness: null,
  joy: null,
}

const rating = (state = initialState, action = {}) => {
  switch (action.type) {
  default:
      return { ...state }
  }
}

export default rating;
