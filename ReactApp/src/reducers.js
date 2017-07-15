import { combineReducers } from 'redux';

// connecting all single reducers 

import cars from './reducers/carReducer';
import navigation from './reducers/navigationReducer';
import form from './reducers/formReducer';
import graphdata from './reducers/graphdataReducer';
import graphConfig from './reducers/graphConfigReducer';
import series from './reducers/seriesReducer';

export default combineReducers({
  cars,
  navigation,
  form,
  graphdata,
  graphConfig,
  series,
});
