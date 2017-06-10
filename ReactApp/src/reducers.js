import { combineReducers } from 'redux';

import cars from './reducers/carReducer';
import navigation from './reducers/navigationReducer';

export default combineReducers({
  cars,
  navigation,
});
