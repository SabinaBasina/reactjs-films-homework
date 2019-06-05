import { combineReducers } from 'redux';

import homeReducers from './moduleHome/moduleHomeReducers';
import detailsReducers from './moduleDetails/moduleDetailsReducers';
import authReducers from './moduleAuth/moduleAuthReducers';
import profileReducers from './moduleProfile/moduleProfileReducers';

export default combineReducers({
  homeReducers,
  detailsReducers,
  authReducers,
  profileReducers,
});
