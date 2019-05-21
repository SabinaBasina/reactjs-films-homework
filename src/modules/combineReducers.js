import { combineReducers } from 'redux';

import homeReducers from './moduleHome/moduleHomeReducers';
import detailsReducers from './moduleDetails/moduleDetailsReducers';
import profileReducers from './moduleProfile/moduleProfileReducers';

export default combineReducers({
  homeReducers,
  detailsReducers,
  profileReducers,
});
