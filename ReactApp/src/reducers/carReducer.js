import { normalizeCars } from '../schema';

const cars = (state = {}, action = {}) => {
  switch (action.type) {
  case 'FETCH_SUCCESS': {
    switch (action.payload.resource) {
    case 'cars':
      return {
        ...state,
        ...normalizeCars(action.payload.data),
      }
    default:
        return { ...state }
      }
    }
  default:
      return { ...state }
  }
}

export default cars;
