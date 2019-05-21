export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_FAVORITES_TVSHOWS':
      return {
        ...state,
        tvShowsFavorites: action.payload,
      };
    default:
      return state;
  }
};
