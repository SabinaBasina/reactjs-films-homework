/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';


const setTvShow = createAction('SET_TVSHOWDETAILS');

export const loadTvShowsDetails = id => async (dispatch) => {
  const response = await http.get(`https://api.tvmaze.com/shows/${id}`);
  dispatch(setTvShow(response.data));
};
