import { combineReducers } from 'redux';


const initial = {
  cars: [],
  car: null,
};

function modal(state = null, action) {
  return { ...state }
}

function selected(
  state = { ...initial } , action = {}) {
    switch(action.type) {
      case 'SELECT_CAR':
        return {
          ...state,
          cars: action.payload.car
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
