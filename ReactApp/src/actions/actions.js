import ActionTypes from '../constants';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

// actions in frontend
export const testing = (bool) => ({ type: ActionTypes.Test,  payload: bool })

// Actions to backend

// call to server to access db
export const setTest = (id, count, callback = null) => ((dispatch) => {
  dispatch(setTest1(id, count));
  return axios.post(`${ROOT_URL}/testRoute`, {id, count})
    .then(
      (r) => {
        if (callback) { callback(true, r); }
        dispatch(setTestSuccess(r));
      },
      (e) => {
        if (callback) { callback(false, e); }
        dispatch(setTestError(e));
      }
    );
});

// actions recieved by success
function setTestSuccess(r) {
  return {
    type: ActionTypes.SetTestSuccess,
    payload: r
  }
}

function setTest1(id, count) {
  return {
    type: ActionTypes.SetTest,
    resource: {id, count}
  };
}

function setTestError(error) {
  return {
    type: ActionTypes.SetTestError,
    payload: error,
  }
}
