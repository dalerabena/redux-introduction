import { combineReducers } from 'redux';

import clicks from './clicksReducer';
import todos from './todosReducer';

export default combineReducers({
  todos,
  clicks
});