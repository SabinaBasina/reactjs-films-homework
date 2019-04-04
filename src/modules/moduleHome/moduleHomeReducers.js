export default (state = { }, action) => {
  switch (action.type) {
    case 'SET_TVSHOWS':
      return {
        ...state,
        tvShows: action.payload,
      };
    default:
      return state;
  }
};
