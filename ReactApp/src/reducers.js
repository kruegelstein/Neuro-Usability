import { combineReducers } from 'redux';

// connecting all single reducers

import user from './reducers/userReducer';

export default combineReducers({
  user
});
