/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';

import { getPage } from '../selectors';


const setPage = createAction('SET_TVSHOWS');

export const loadTvShows = () => async (dispatch, getState) => {
  const page = getPage(getState());
  const response = await http.get(`https://api.tvmaze.com/shows?page=${page}`);
  window.scrollTo(0, 0);
  dispatch(setPage(response.data));
};
