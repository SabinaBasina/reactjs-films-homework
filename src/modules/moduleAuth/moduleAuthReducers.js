const initialState = {
  isAuthentication: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_AUTHENTICATION':
      return {
        ...state,
        isAuthentication: action.payload,
      };
    default:
      return state;
  }
};
