import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';
import allReducers from './reducers';

const composeEnhancers = composeWithDevTools({}) || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = createStore(
  // persistedReducer,
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