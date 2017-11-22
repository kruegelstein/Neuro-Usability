import ActionTypes from '../ActionTypes.js';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

// actions in frontend
export const changeFormValue = (field, value) => ({ type: ActionTypes.ChangeForm,  payload: { field, value } })
export const selectAdmin = () => ({ type: ActionTypes.SelectAdmin,  payload: {} })
export const selectRating = () => ({ type: ActionTypes.SelectRating,  payload: {} })
export const selectIntro = () => ({ type: ActionTypes.SelectIntro,  payload: {} })
export const selectGood = () => ({ type: ActionTypes.SelectGood,  payload: {} })
export const selectBad = () => ({ type: ActionTypes.SelectBad,  payload: {} })
export const addUserToForm = (id, name) => ({ type: ActionTypes.AddUserToForm,  payload: { id, name } })
export const selectLetter = (letter) => ({ type: ActionTypes.SelectLetter,  payload: { letter } })
export const submitResults = (id, name, level, timeGood, letters) => ({ type: ActionTypes.Submit,  payload: { id, name, level, timeGood, letters  } })
export const saveTime = (time) => ({ type: ActionTypes.SaveTime,  payload: { time } })
export const submitUserId = (id) => ({ type: ActionTypes.SubmitUserId,  payload: { id } })

// Actions to backend

// call to server to access db
export const addUserToDb = (id, name, callback = null) => ((dispatch) => {
  console.log('*******')
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


// actions recieved by success or error
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
