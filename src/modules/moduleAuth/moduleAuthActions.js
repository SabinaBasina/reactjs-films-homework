/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';

const setIsAuthentication = createAction('IS_AUTHENTICATION');

export const loadIsAuthentication = bool => (dispatch) => {
  dispatch(setIsAuthentication(bool));
};
