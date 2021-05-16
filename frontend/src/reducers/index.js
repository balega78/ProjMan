import { loginReducer } from './loginReducer';
import { projectReducer } from './projectReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  login: loginReducer,
  projects: projectReducer,

});

export default allReducers