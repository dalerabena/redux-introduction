import { combineReducers } from 'redux';
// import { routerReducer as routing } from 'react-router-redux';

import clicks from './clicksReducer';
import todos from './todosReducer';

export default combineReducers({
  todos,
  clicks,
  // routing
});