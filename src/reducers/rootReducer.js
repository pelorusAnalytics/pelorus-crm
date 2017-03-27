import { combineReducers } from 'redux';

import auth from './auth';
import facilities from './facilities';
import goals from './goal';

export default combineReducers({
  auth,
  facilities,
  goals
});
