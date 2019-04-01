const initialState = {
  value: '',
  page: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_TV':
      return {
        ...state,
        value: action.payload,
      };
    case 'SET_TVSHOWS':
      return {
        ...state,
        tvShows: action.payload,
      };
    case 'INCREMENT':
      return {
        ...state,
        page: state.page + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};
