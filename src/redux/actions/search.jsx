/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';

import { getValue } from '../selectors';


const setTvShows = createAction('SET_TVSHOWS');

export const getSearchResult = () => (dispatch, getState) => {
  const value = getValue(getState());
  http
    .get(`https://api.tvmaze.com/search/shows?q=${value}`)
    .then((response) => {
      dispatch(setTvShows(response.data.map(data => data.show)));
    });
};
