import { loginReducer } from './loginReducer';
import { projectReducer } from './projectReducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from 'redux';
 
//from store
const persistConfig = {
  key: 'root',
  storage,
}

const allReducers = combineReducers({
  login: persistReducer(persistConfig, loginReducer),
  projects: projectReducer,
});


export default allReducers