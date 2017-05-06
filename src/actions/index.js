import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchBurgers = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_BURGERS_REQUEST',
    filter,
  });

  return api.fetchBurgers(filter).then(
    response => {
      dispatch({
        type: 'FETCH_BURGERS_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfBurgers),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_BURGERS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    }
  );
};

export const addBurger = (text) => (dispatch) =>
  api.addBurger(text).then(response => {
    dispatch({
      type: 'ADD_BURGER_SUCCESS',
      response: normalize(response, schema.burger),
    });
  });

export const toggleBurger = (id) => (dispatch) =>
  api.updateBurger(id).then(response => {
    dispatch({
      type: 'TOGGLE_BURGER_SUCCESS',
      response: normalize(response, schema.burger),
    });
  });
