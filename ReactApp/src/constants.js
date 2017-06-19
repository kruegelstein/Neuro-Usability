const actionTypes = {
  GetCarsRequested: 'GET_CARNAMES',
  GetCarsRejected: 'GET_CARNAMES_ERROR',
  GetCarsFulfilled: 'GET_CARNAMES_SUCCESS',
  GetCarsDataRequested: 'GET_CAR_DATA',
  getCarsDataRejected: 'GET_CAR_DATA_ERROR',
  getCarsDataFullfilled: 'GET_CAR_DATA_SUCCESS',
  SelectCar: 'SELECT_CAR',
  SelectCarFromList: 'SELECT_CAR_FROM_LIST',
  OpenModal: 'OPEN_MODAL',
  CloseModal: 'CLOSE_MODAL',
  SetCarsFilter: 'SET_CARS_FILTER',
  UnselectAllCars: 'UNSELECT_ALL_CARS',
  UnselectCar: 'UNSELECT_CAR'
};

export default actionTypes;
