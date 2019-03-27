const initialState = {
  value: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_TV':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
