import { normalize, schema, denormalize } from 'normalizr';

const carSchema = new schema.Entity('cars');
const carListSchema = new schema.Array(carSchema);

const normalizeCars = (data) => {
  const normalizedData = normalize(data, carListSchema);
  return normalizedData.entities.cars;
};
const denormalizeCars = (cars) => {
  const carIds = Object.keys(cars);
  return denormalize(carIds, carListSchema, { cars });
};



export {
  normalizeCars,
  denormalizeCars,
};
