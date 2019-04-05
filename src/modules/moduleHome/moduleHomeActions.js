/* eslint-disable no-undef */
import { createAction } from 'redux-actions';
import http from 'axios';


const setTvShows = createAction('SET_TVSHOWS');
const setIsReadyTvShows = createAction('IS_READY_TVSHOWS');

export const getSearchResult = searchValue => async (dispatch) => {
  dispatch(setIsReadyTvShows(false));
  const response = await http.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
  dispatch(setTvShows(response.data.map(data => data.show)));
  dispatch(setIsReadyTvShows(true));
};

export const loadTvShows = page => async (dispatch) => {
  dispatch(setIsReadyTvShows(false));
  window.scrollTo(0, 0);
  const response = await http.get(`https://api.tvmaze.com/shows?page=${page}`);
  dispatch(setTvShows(response.data));
  dispatch(setIsReadyTvShows(true));
};
