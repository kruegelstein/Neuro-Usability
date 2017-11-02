import { combineReducers } from 'redux';

// connecting all single reducers

import user from './reducers/userReducer';
import form from './reducers/formReducer';

export default combineReducers({
  user,
  form
});
