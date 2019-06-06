/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';

const setFavoritesTvShows = createAction('SET_FAVORITES_TVSHOWS');

export const loadFavoritesTvShows = ids => async (dispatch) => {
  const favoritesTvShows = [];
  for (const index in ids) {
    const id = ids[index];
    const response = await http.get(`https://api.tvmaze.com/shows/${id}`);
    favoritesTvShows.push(response.data);
  }
  dispatch(setFavoritesTvShows(favoritesTvShows));
};
