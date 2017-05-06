import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  available: createList('available'),
  devoured: createList('devoured'),
});

const burgers = combineReducers({
  byId,
  listByFilter,
});

export default burgers;

export const getVisibleBurgers = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  console.log("ids >>>>", ids);
  return ids.map(id => fromById.getBurger(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);
