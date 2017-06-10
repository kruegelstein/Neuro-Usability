import ActionTypes from '../constants';
import database from '../firebase';

export const closeModal = () => ({ type: ActionTypes.CloseModal, payload: { data: false } });
export const openModal = () => ({ type: ActionTypes.OpenModal, payload: { data: true } });
export const selectCar = car => ({ type: ActionTypes.SelectCar, payload: { car } });
export const selectCarFromList = car => ({ type: ActionTypes.SelectCarFromList, payload: { car } });
export const deselectCar = car => ({ type: ActionTypes.DeselectCar, payload: { car } });
export const deselectAllCars = () => ({ type: ActionTypes.DeselectAllCars, payload: { } })

export function getCars() {
  return dispatch => {
    dispatch(getCarsRequestedAction());
    return database.ref('Cars').once('value', snap => {
      const car = snap.val();
      dispatch(getCarsFulfilledAction(car))
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
