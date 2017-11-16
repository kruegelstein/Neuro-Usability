import { combineReducers } from 'redux';

// connecting all single reducers

import navigation from './reducers/navigationReducer';
import form from './reducers/formReducer';

export default combineReducers({
  navigation,
  form
});
