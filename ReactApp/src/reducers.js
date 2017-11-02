import { combineReducers } from 'redux';

// connecting all single reducers

import user from './reducers/userReducer';
import form from './reducers/formReducer';
import navigation from './reducers/navigationReducer';


export default combineReducers({
  user,
  form,
  navigation
});
