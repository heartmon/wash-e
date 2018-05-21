import { combineReducers } from 'redux';

import nav from './nav';
import program from './program';
import wmData from './wm_data';
import impact from './impact';

export default combineReducers({
  nav,
  program,
  wmData,
  impact
});
