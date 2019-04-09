import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import Search from '../Search';

describe('Search', () => {
  it('should change value', () => {
    const component = ReactTestUtils.renderIntoDocument(<Search />);
    const input = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'InputSearch');
    expect(input.value).toEqual('');
    ReactTestUtils.Simulate.change(input, { target: { value: 'a' } });
    expect(input.value).toEqual('a');
  });

  it('should invoke history.push', () => {
    const historyMock = { push: jest.fn() };
    const component = ReactTestUtils.renderIntoDocument(<Search history={historyMock} />);
    const input = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'InputSearch');
    ReactTestUtils.Simulate.keyPress(input, { key: 'Enter', keyCode: 13, which: 13 });
    expect(historyMock.push.mock.calls.length).toBe(1);
  });

  it('should not invoke history.push', () => {
    const historyMock = { push: jest.fn() };
    const component = ReactTestUtils.renderIntoDocument(<Search history={historyMock} />);
    const input = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'InputSearch');
    ReactTestUtils.Simulate.keyPress(input, { key: 'Space', keyCode: 32, which: 32 });
    expect(historyMock.push).toHaveBeenCalledTimes(0);
  });
});
