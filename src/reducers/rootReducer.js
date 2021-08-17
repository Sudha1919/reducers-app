import { combineReducers } from 'redux';

import reducermain from './reducermain';
import reducerTask from './reducerTask';

export default combineReducers({
  red: reducermain,
  task: reducerTask
});
