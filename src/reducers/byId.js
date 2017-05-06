const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.burgers,
    };
  }
  return state;
};

export default byId;

export const getBurger = (state, id) => state[id];
