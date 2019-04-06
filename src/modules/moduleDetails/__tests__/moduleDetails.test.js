import reducer from '../moduleDetailsReducers';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle IS_READY_TVSHOW', () => {
    expect(
      reducer([], {
        type: 'IS_READY_TVSHOW',
      }),
    ).toMatchSnapshot();
  });

  it('should handle IS_READY_EPISODES', () => {
    expect(
      reducer([], {
        type: 'IS_READY_EPISODES',
      }),
    ).toMatchSnapshot();
  });

  it('should handle SET_TVSHOWEPISODES', () => {
    expect(
      reducer([], {
        type: 'SET_TVSHOWEPISODES',
      }),
    ).toMatchSnapshot();
  });

  it('should handle SET_TVSHOWDETAILS', () => {
    expect(
      reducer([], {
        type: 'SET_TVSHOWDETAILS',
      }),
    ).toMatchSnapshot();
  });
});
