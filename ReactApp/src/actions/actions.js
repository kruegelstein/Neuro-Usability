import ActionTypes from '../ActionTypes.js';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

// actions in frontend
export const recognizeClick = (round) => ({ type: ActionTypes.RecognizeClick,  payload: { round } })
export const changeFormValue = (field, value) => ({ type: ActionTypes.ChangeForm,  payload: { field, value } })
export const selectAdmin = () => ({ type: ActionTypes.SelectAdmin,  payload: {} })
export const selectRating = () => ({ type: ActionTypes.SelectRating,  payload: {} })
export const selectDemographics = () => ({ type: ActionTypes.SelectDemographics,  payload: {} })
export const selectIntro = () => ({ type: ActionTypes.SelectIntro,  payload: {} })
export const selectRound2 = () => ({ type: ActionTypes.SelectRound2,  payload: {} })
export const selectRound3 = () => ({ type: ActionTypes.SelectRound3,  payload: {} })
export const selectRound4 = () => ({ type: ActionTypes.SelectRound4,  payload: {} })
export const selectRound5 = () => ({ type: ActionTypes.SelectRound5,  payload: {} })
export const selectGood = (round) => ({ type: ActionTypes.SelectGood,  payload: { round } })
export const selectBad = (round) => ({ type: ActionTypes.SelectBad,  payload: { round } })
export const addUserToForm = (id, name) => ({ type: ActionTypes.AddUserToForm,  payload: { id, name } })
export const selectLetter = (round, index) => ({ type: ActionTypes.SelectLetter,  payload: { round, index } })
export const deselectLetter = (round, index) => ({ type: ActionTypes.DeselectLetter,  payload: { round, index } })
export const submitDemographics = (id, gender, age, edu, course) => ({ type: ActionTypes.SubmitDemographics, payload: {id, gender, age, edu, course}})
export const submitResults = (
  id,
  name,
  level,
  time1,
  time2,
  time3,
  time4,
  time5,
  selectedLetters1,
  selectedLetters2,
  selectedLetters3,
  selectedLetters4,
  selectedLetters5,
  letter1,
  letter2,
  letter3,
  letter4,
  letter5,
  einfach,
  hässlich,
  praktisch,
  stilvoll,
  voraussagbar,
  minderwertig,
  phantasielos,
  gut,
  verwirrend,
  lahm,
  clicks1,
  clicks2,
  clicks3,
  clicks4,
  clicks5) => ({
  type: ActionTypes.Submit,  payload: {
    id,
    name,
    level,
    time1,
    time2,
    time3,
    time4,
    time5,
    selectedLetters1,
    selectedLetters2,
    selectedLetters3,
    selectedLetters4,
    selectedLetters5,
    letter1,
    letter2,
    letter3,
    letter4,
    letter5,
    einfach,
    hässlich,
    praktisch,
    stilvoll,
    voraussagbar,
    minderwertig,
    phantasielos,
    gut,
    verwirrend,
    lahm,
    clicks1,
    clicks2,
    clicks3,
    clicks4,
    clicks5
  } })
export const saveTime = (round, time) => ({ type: ActionTypes.SaveTime,  payload: { round, time } })
export const submitUserId = (id) => ({ type: ActionTypes.SubmitUserId,  payload: { id } })
export const setLettersToFind = (index1, index2, index3, index4, index5) => ({ type: ActionTypes.SetLettersToFind,  payload: { index1, index2, index3, index4, index5 } })

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
