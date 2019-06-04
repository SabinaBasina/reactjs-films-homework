/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import http from 'axios';

const setIsAuthentication = createAction('IS_AUTHENTICATION');

export const loadIsAuthentication = (name, password) => async (dispatch) => {
  const response = await http.post('/login', {
    name,
    password,
  });
  // sessionStorage.setItem('name', response.data.name);
  dispatch(setIsAuthentication(response.data));
};
