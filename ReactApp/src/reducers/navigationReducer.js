import { combineReducers } from 'redux';
import ActionTypes from '../constants';


const initial = {
  car: null,
  filterSelected: false,
};

function modal(state = false, action) {
  switch(action.type) {
    case ActionTypes.OpenModal:
      return action.payload.modal
    case ActionTypes.CloseModal:
      return action.payload.modal
    default:
      return state
  }
}

function selected(
  state = { ...initial } , action = {}) {
    switch(action.type) {
      case ActionTypes.SelectCar:
        return {
          ...state,
          car: action.payload.car
        }
      case ActionTypes.SetCarsFilter:
        return {
          ...state,
          filterSelected: action.payload
        }
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
