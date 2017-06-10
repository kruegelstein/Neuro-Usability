import ActionTypes from '../constants';
import database from '../firebase';

export const selectCar = car => ({ type: ActionTypes.SelectCar, payload: { car } });

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
