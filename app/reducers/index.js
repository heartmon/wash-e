import { combineReducers } from 'redux';

import nav from './nav';
import program from './program';
import wmData from './wm_data';

export default combineReducers({
  nav,
  program,
  wmData,
});
