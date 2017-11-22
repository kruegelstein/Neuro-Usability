import { combineReducers } from 'redux';

// connecting all single reducers

import navigation from './reducers/navigationReducer';
import form from './reducers/formReducer';
import result from './reducers/resultReducer';
import rating from './reducers/ratingReducer';

export default combineReducers({
  navigation,
  form,
  result,
  rating
});
