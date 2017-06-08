import { carRef } from '../firebase';

export const cars = () => {
  carRef.on('value', snap => {
    let cars = [];
    snap.forEach(car => {
      const { index, name } = car.val();
      cars.push({email, title});
    })
    console.log('cars', cars);
    return cars
  });
};

export default cars;
