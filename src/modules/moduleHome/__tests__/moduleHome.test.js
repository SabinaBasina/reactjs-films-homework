import reducer from '../moduleHomeReducers';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle IS_READY_TVSHOWS', () => {
    expect(
      reducer([], {
        type: 'IS_READY_TVSHOWS',
      }),
    ).toMatchSnapshot();
  });

  it('should handle SET_TVSHOWS', () => {
    expect(
      reducer([], {
        type: 'SET_TVSHOWS',
      }),
    ).toMatchSnapshot();
  });
});
