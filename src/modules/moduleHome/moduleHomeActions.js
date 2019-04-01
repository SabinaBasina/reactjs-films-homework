/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';

import { getValue, getPage } from './moduleHomeSelectors';


const setTvShows = createAction('SET_TVSHOWS');
const setPage = createAction('SET_TVSHOWS');

export const getSearchResult = () => async (dispatch, getState) => {
  const value = getValue(getState());
  const response = await http.get(`https://api.tvmaze.com/search/shows?q=${value}`);
  dispatch(setTvShows(response.data.map(data => data.show)));
};

export const loadTvShows = () => async (dispatch, getState) => {
  const page = getPage(getState());
  const response = await http.get(`https://api.tvmaze.com/shows?page=${page}`);
  window.scrollTo(0, 0);
  dispatch(setPage(response.data));
};

export const onIncrement = () => ({ type: 'INCREMENT' });

export const onDecrement = () => ({ type: 'DECREMENT' });
