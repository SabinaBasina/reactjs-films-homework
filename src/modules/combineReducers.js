import { combineReducers } from 'redux';

import homeReducers from './moduleHome/moduleHomeReducers';
import detailsReducers from './moduleDetails/moduleDetailsReducers';

export default combineReducers({
  homeReducers,
  detailsReducers,
});
