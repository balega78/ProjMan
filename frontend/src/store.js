import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const composeEnhancers = composeWithDevTools({}) || compose;

export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
