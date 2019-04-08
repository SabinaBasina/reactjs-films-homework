import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
// import TestRenderer from 'react-test-renderer';
import Search from '../Search';


describe('test', () => {
  it('Search test', () => {
    const spy = jest.fn();
    const historyMock = { push: jest.fn() };
    const component = ReactTestUtils.renderIntoDocument(<Search onKeyPress={spy} history={historyMock} />);
    const input = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'InputSearch');
    expect(input.value).toEqual('');
    ReactTestUtils.Simulate.keyPress(input, { key: 'Enter', keyCode: 13, which: 13 });
    ReactTestUtils.Simulate.change(input, { target: { value: 'a' } });
    expect(input.value).toEqual('a');
    expect(historyMock.push.mock.calls.length).toBe(1);
    // expect(spy).toBeCalledWith('a');
    // console.log('!!!!', input);
  });
});
