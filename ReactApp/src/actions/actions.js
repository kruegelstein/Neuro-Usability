import ActionTypes from '../constants';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

// actions in frontend
export const changeFormValue = (field, value) => ({ type: ActionTypes.ChangeForm,  payload: { field, value } })

//------------------------------------------------------------------------------

// Actions to backend

// call to server to access db
export const addUserToDb = (id, name, callback = null) => ((dispatch) => {
  dispatch(addUser(id, name));
  return axios.post(`${ROOT_URL}/addUser`, {id, name})
    .then(
      (r) => {
        if (callback) { callback(true, r); }
        dispatch(addUserSuccess(r));
      },
      (e) => {
        if (callback) { callback(false, e); }
        dispatch(addUserError(e));
      }
    );
});

export const saveSelection = (color, callback = null) => ((dispatch) => {
  dispatch(saveColor(color));
  return axios.post(`${ROOT_URL}/addColor`, {color})
    .then(
      (r) => {
        if (callback) { callback(true, r); }
        dispatch(saveColorSuccess(r));
      },
      (e) => {
        if (callback) { callback(false, e); }
        dispatch(saveColorError(e));
      }
    );
});

//------------------------------------------------------------------------------

// actions recieved by success or error
function saveColorSuccess(r) {
  return {
    type: ActionTypes.SaveColorSuccess,
    payload: r
  }
}

function saveColor(id, name) {
  return {
    type: ActionTypes.SaveColor,
    resource: {id, name}
  };
}

function saveColorError(error) {
  return {
    type: ActionTypes.SaveColorError,
    payload: error,
  }
}

function addUserSuccess(r) {
  return {
    type: ActionTypes.AddUserSuccess,
    payload: r
  }
}

function addUser(id, name) {
  return {
    type: ActionTypes.AddUser,
    resource: {id, name}
  };
}

function addUserError(error) {
  return {
    type: ActionTypes.AddUserError,
    payload: error,
  }
}
