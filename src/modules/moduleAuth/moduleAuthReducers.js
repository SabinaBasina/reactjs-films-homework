const initialState = {
  isAuthentication: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_AUTHENTICATION':
      return {
        ...state,
        isAuthentication: action.payload,
      };
    // case 'SET_TVSHOWDETAILS':
    //   return {
    //     ...state,
    //     tvShow: action.payload,
    //   };
    default:
      return state;
  }
};
