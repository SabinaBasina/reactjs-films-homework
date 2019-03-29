export default (state = { }, action) => {
  switch (action.type) {
    case 'SET_TVSHOWEPISODES':
      return {
        ...state,
        tvShowEpisodes: action.payload,
      };
    default:
      return state;
  }
};
