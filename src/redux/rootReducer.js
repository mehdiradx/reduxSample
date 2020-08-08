
import { combineReducers } from 'redux';

import login from './modules/login';

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
