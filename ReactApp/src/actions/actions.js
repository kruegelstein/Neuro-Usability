import ActionTypes from '../constants';
import database from '../firebase';

export const setCarsFilter = (bool) => ({ type: ActionTypes.SetCarsFilter,  payload: bool })
export const closeModal = () => ({ type: ActionTypes.CloseModal, payload: { modal: false } });
export const openModal = (car, graphdata) => ({ type: ActionTypes.OpenModal, payload: { modal: true, car: car, graphdata: graphdata } });
export const selectCar = (car) => ({ type: ActionTypes.SelectCar, payload: { car } });
export const unselectCar = car => ({ type: ActionTypes.UnselectCar, payload: { car } });
export const unselectAllCars = () => ({ type: ActionTypes.UnselectAllCars, payload: { } })
export const selectGraph = (attribute, graph) => ({ type: ActionTypes.SelectGraph, payload: { attribute, value: graph }})
export const selectColor = (attribute, color) => ({ type: ActionTypes.SelectColor, payload: { attribute, value: color }})
export const selectAttribute = (attribute, bool) => ({ type: ActionTypes.SelectAttribute, payload: { attribute, value: true }})
export const unselectAttribute = (attribute, bool) => ({ type: ActionTypes.UnselectAttribute, payload: { attribute, value: false }})
export const submitOptions = (form, car) => ({ type: ActionTypes.SubmitOptions, payload: { form, car }})

//Export to Mongo actions
export const loadInfosInMongo = (id, name) => ({
  // load in collection cars
  type: 'loadInfosInMongo',
  payload: {id, name}

})

export const loadDataInMongo = (id, timestamps) => ({
  // load in collection cars
  type: 'loadDataInMongo',
  payload: {id, timestamps}
})

// Firebase shit
export function loadAdditionalData(carName, car) {
  return dispatch => {
    dispatch(getCarsDataRequestedAction(carName));
    return database.ref('result').once('value', snap => {
      const data = snap.child(carName).val();
      dispatch(getCarsDataFullfilledAction(data, carName, car))
    })
    .catch((error) => {
      connsole.log(error);
      dispatch(getCarsDataRejectedAction(error))
    })
  }
}

export function getCars() {
  return dispatch => {
    dispatch(getCarsRequestedAction());
    return database.ref('result').limitToFirst(2).once('value', snap => {
      const cars = Object.keys(snap.val());
      dispatch(getCarsFulfilledAction(cars))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getCarsRejectedAction(error));
    });
  }
}

function getCarsDataFullfilledAction(data, carName, car) {
  return {
    type: ActionTypes.getCarsDataFullfilled,
    payload: {timestamps: data , carName, car}
  }
}

function getCarsDataRequestedAction(car) {
  return {
    type: ActionTypes.GetCarsDataRequested,
    resource: car,
  };
}

function getCarsDataRejectedAction(error) {
  return {
    type: ActionTypes.getCarsDataRejected,
    payload: error,
  }
}

function getCarsRequestedAction() {
  return {
    type: ActionTypes.GetCarsRequested
  };
}

function getCarsRejectedAction(error) {
  return {
    type: ActionTypes.GetCarsRejected,
    payload: error
  }
}

function getCarsFulfilledAction(car) {
  return {
    type: ActionTypes.GetCarsFulfilled,
    data: car
  };
}
