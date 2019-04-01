export default (state = { }, action) => {
  switch (action.type) {
    case 'SET_TVSHOWEPISODES':
      return {
        ...state,
        tvShowEpisodes: action.payload,
      };
    case 'SET_TVSHOWDETAILS':
      return {
        ...state,
        tvShow: action.payload,
      };
    default:
      return state;
  }
};
