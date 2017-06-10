import { combineReducers } from 'redux';


const initial = {
  cars: null,
  car: null,
};

function modal(state = null, action) {
  return { ...state }
}

function selected(
  state = { ...initial } , action = {}) {
    return { ...state }
}

const navigation = combineReducers({
  selected,
  modal,
});

export default navigation;
