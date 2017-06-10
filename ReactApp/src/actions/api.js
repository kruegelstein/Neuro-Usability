import { carRef } from '../firebase';
// import firebaseApp from '../firebase.js'

export const cars = () => {
  let cars = [];
  carRef.on('child_added', function (snap) {
    cars.push(snap.val());
  });
    console.log(cars);
    return cars;
  // carRef.on('value', snap => {
  //   let cars = [];
  //   snap.forEach(car => {
  //     const { index, name } = car.val();
  //     cars.push({email, title});
  //   })
  //   console.log('cars', cars);
  //   return cars
  // });
};

export default cars;
