import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import allReducers from './reducers';

const composeEnhancers = composeWithDevTools({}) || compose;

export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(
  store
);

/*export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}*/