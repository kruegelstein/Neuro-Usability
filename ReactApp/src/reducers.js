import { combineReducers } from 'redux';

import cars from './reducers/carReducer';
import navigation from './reducers/navigationReducer';
import form from './reducers/formReducer';
import test from './reducers/testReducer';

export default combineReducers({
  cars,
  navigation,
  form,
  test,
});
