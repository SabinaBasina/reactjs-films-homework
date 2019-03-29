/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';

const setTvShowEpisodes = createAction('SET_TVSHOWEPISODES');

export const loadTvShowEpisodes = nameTvShow => async (dispatch) => {
  const response = await http.get(`https://api.tvmaze.com/singlesearch/shows?q=${nameTvShow}&embed=episodes`);
  dispatch(setTvShowEpisodes(response.data));
};
