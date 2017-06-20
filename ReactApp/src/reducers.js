import { combineReducers } from 'redux';

import cars from './reducers/carReducer';
import navigation from './reducers/navigationReducer';
import form from './reducers/formReducer';

export default combineReducers({
  cars,
  navigation,
  form,
});
