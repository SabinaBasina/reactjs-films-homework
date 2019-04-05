const initialState = {
  isReadyTvShows: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_READY_TVSHOWS':
      return {
        ...state,
        isReadyTvShows: action.payload,
      };
    case 'SET_TVSHOWS':
      return {
        ...state,
        tvShows: action.payload,
      };
    default:
      return state;
  }
};
