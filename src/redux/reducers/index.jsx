import { combineReducers } from 'redux';

import page from './page';
import search from './search';
import tvshowdetails from './tvshowdetails';
import episodes from './episodes';

export default combineReducers({
  page,
  search,
  tvshowdetails,
  episodes,
});
