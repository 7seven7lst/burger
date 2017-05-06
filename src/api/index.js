import { v4 } from 'node-uuid';
import * as axios from 'axios';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

export const fetchBurgers = filter =>
  axios.get('/api/all')
  .then(response => {
    let burgers = response.data;
    console.log("burgers>>>", burgers);
    switch (filter) {
      case 'all':
        return burgers;
      case 'available':
        return burgers.filter(b => !b.devoured);
      case 'devoured':
        return burgers.filter(b => b.devoured);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  })
  .catch(error => {
    throw new Error(`Unable to get burgers from backend`);
  });

export const addBurger = newBurger =>
  axios.post('/api/add/burger', newBurger)
    .then(response => response.data)
    .catch(error => {
      throw new Error(`Unable to save burger to backend`);
    });

export const updateBurger = id => {
  console.log("updatedBurger is>>>>", id);
  return axios.post(`/api/update/burger/${id}`, {devoured:true})
    .then(response => response.data)
    .catch(error => {
      throw new Error(`Unable to update burger to backend`);
    });
}
