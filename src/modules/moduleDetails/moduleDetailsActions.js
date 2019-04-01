/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';

const setTvShowEpisodes = createAction('SET_TVSHOWEPISODES');
const setTvShow = createAction('SET_TVSHOWDETAILS');

export const loadTvShowEpisodes = nameTvShow => async (dispatch) => {
  const response = await http.get(`https://api.tvmaze.com/singlesearch/shows?q=${nameTvShow}&embed=episodes`);
  dispatch(setTvShowEpisodes(response.data));
};

export const loadTvShowsDetails = id => async (dispatch) => {
  const response = await http.get(`https://api.tvmaze.com/shows/${id}`);
  dispatch(setTvShow(response.data));
};
