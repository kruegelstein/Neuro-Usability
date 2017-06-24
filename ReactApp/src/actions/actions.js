import ActionTypes from '../constants';
import database from '../firebase';

export const setCarsFilter = (bool) => ({ type: ActionTypes.SetCarsFilter,  payload: bool })
export const closeModal = () => ({ type: ActionTypes.CloseModal, payload: { data: false } });
export const openModal = () => ({ type: ActionTypes.OpenModal, payload: { data: true } });
export const selectCar = (car) => ({ type: ActionTypes.SelectCar, payload: { car } });
export const selectCarFromList = car => ({ type: ActionTypes.SelectCarFromList, payload: { car } });
export const unselectCar = car => ({ type: ActionTypes.UnselectCar, payload: { car } });
export const unselectAllCars = () => ({ type: ActionTypes.UnselectAllCars, payload: { } })
export const selectGraph = (attribute, graph) => ({ type: ActionTypes.SelectGraph, payload: { attribute, value: graph }})
export const selectColor = (attribute, color) => ({ type: ActionTypes.SelectColor, payload: { attribute, value: color }})
export const selectAttribute = (attribute, bool) => ({ type: ActionTypes.SelectAttribute, payload: { attribute, value: true }})
export const unselectAttribute = (attribute, bool) => ({ type: ActionTypes.UnselectAttribute, payload: { attribute, value: false }})

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
