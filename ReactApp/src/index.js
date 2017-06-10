import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers.js';

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

function makeStore(initialState, middlewares) {
  let enhancer;
  if (!isProduction()) {
    enhancer = compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  } else {
    enhancer = compose(
      applyMiddleware(...middlewares),
    );
  }
  return createStore(reducers, initialState, enhancer);
}

const store = makeStore({}, [thunk]);
// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
