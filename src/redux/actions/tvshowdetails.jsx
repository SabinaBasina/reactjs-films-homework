/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';


const setTvShow = createAction('SET_TVSHOWDETAILS');

export const loadTvShowsDetails = id => (dispatch) => {
  http
    .get(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => {
      dispatch(setTvShow(response.data));
    });
};
