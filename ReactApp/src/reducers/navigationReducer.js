import { combineReducers } from 'redux';
import ActionTypes from '../constants';

// reducer for navigation within the app

// build initial state
const initial = {
  car: null,
  filterSelected: false,
};

function modal(state = false, action) {
  switch(action.type) {
    // open a modal
    case ActionTypes.OpenModal:
      return action.payload.modal
    // close a modal
    case ActionTypes.CloseModal:
      return action.payload.modal
    default:
      return state
  }
}

function selected(
  state = { ...initial } , action = {}) {
    switch(action.type) {
      //selecting a car
      case ActionTypes.SelectCar:
        return {
          ...state,
          car: action.payload.car
        }
      // which list is active
      case ActionTypes.SetCarsFilter:
        return {
          ...state,
          filterSelected: action.payload
        }
      // closing modal
      case ActionTypes.CloseModal: {
        return {
          ...state,
          car: null
        }
      }
      default:
        return state
    }
}

const navigation = combineReducers({
  selected,
  modal,
});

export default navigation;
