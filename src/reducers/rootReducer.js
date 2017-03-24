import { combineReducers } from 'redux';

import auth from './auth';
import facilities from './facilities';

export default combineReducers({
  auth,
  facilities
});
