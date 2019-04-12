import { createAction } from 'redux-actions';
import http from 'axios';

const setTvShowEpisodes = createAction('SET_TVSHOWEPISODES');
const setTvShow = createAction('SET_TVSHOWDETAILS');
const setIsReadyTvShow = createAction('IS_READY_TVSHOW');
const setIsReadyEpisodes = createAction('IS_READY_EPISODES');

export const loadTvShowEpisodes = nameTvShow => async (dispatch) => {
  dispatch(setIsReadyEpisodes(false));
  const response = await http.get(`https://api.tvmaze.com/singlesearch/shows?q=${nameTvShow}&embed=episodes`);
  dispatch(setTvShowEpisodes(response.data));
  dispatch(setIsReadyEpisodes(true));
};

export const loadTvShowsDetails = id => async (dispatch) => {
  dispatch(setIsReadyTvShow(false));
  const response = await http.get(`https://api.tvmaze.com/shows/${id}`);
  dispatch(setTvShow(response.data));
  dispatch(setIsReadyTvShow(true));
};
