import ActionTypes from '../constants';
import database from '../firebase';

export const setCarsFilter = (bool) => ({ type: ActionTypes.SetCarsFilter,  payload: bool })
export const closeModal = () => ({ type: ActionTypes.CloseModal, payload: { data: false } });
export const openModal = () => ({ type: ActionTypes.OpenModal, payload: { data: true } });
export const selectCar = (car) => ({ type: ActionTypes.SelectCar, payload: { car } });
export const selectCarFromList = car => ({ type: ActionTypes.SelectCarFromList, payload: { car } });
export const unselectCar = car => ({ type: ActionTypes.UnselectCar, payload: { car } });
export const unselectAllCars = () => ({ type: ActionTypes.UnselectAllCars, payload: { } })

export function getCars() {
  return dispatch => {
    dispatch(getCarsRequestedAction());
    return database.ref('result').limitToFirst(10).once('value', snap => {
      const cars = Object.keys(snap.val());
      dispatch(getCarsFulfilledAction(cars))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getCarsRejectedAction());
    });
  }
}



function getCarsRequestedAction() {
  return {
    type: ActionTypes.GetCarsRequested
  };
}

function getCarsRejectedAction() {
  return {
    type: ActionTypes.GetCarsRejected
  }
}

function getCarsFulfilledAction(car) {
  return {
    type: ActionTypes.GetCarsFulfilled,
    data: car
  };
}
