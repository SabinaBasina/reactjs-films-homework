/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';

import { getValue } from '../moduleSelectors';


const setTvShows = createAction('SET_TVSHOWS');

export const getSearchResult = () => async (dispatch, getState) => {
  const value = getValue(getState());
  const response = await http.get(`https://api.tvmaze.com/search/shows?q=${value}`);
  dispatch(setTvShows(response.data.map(data => data.show)));
};
