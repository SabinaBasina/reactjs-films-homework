const initialState = {
  isReadyEpisodes: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_READY_EPISODES':
      return {
        ...state,
        isReadyEpisodes: action.payload,
      };
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
