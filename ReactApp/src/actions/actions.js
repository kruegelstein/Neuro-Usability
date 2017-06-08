import * as api from './api';

export const fetchStart = (resource, params) => ({ type: 'FETCH_START', payload: { resource, params } });
export const fetchedData = (resource, params = {}, data = {}) => ({ type: 'FETCH_SUCCESS', payload: { resource, params, data } });
export const fetchedError = (resource, params = {}, error = {}) => ({ type: 'FETCH_ERROR', payload: { resource, params, error } });

export const loadData = (resource, params, callback = null) => ((dispatch) => {
  dispatch(fetchStart(resource, params));
  return api[resource](params)
    .then(
      (r) => {
        if (callback) { callback(true, r); }
        dispatch(fetchedData(resource, params, r));
      },
      (e) => {
        if (callback) { callback(false, e); }
        dispatch(fetchedError(resource, params, e));
      }
    );
});
