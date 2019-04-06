import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
// import TestRenderer from 'react-test-renderer';
// import Renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
// import { MemoryRouter } from 'react-router';

import Search from '../Search';

describe('test', () => {
  it('Search test 1', () => {
    const spy = jest.fn();
    const { getByLabelText } = render(<Search handleChange={spy} />);
    const input = getByLabelText('');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: '23' } });
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('Search test 2', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Search />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  // it('Search test 3', () => {
  //   const spy = jest.fn();
  //   // const historyMock = { push: jest.fn() };
  //   // const component = TestRenderer.create(
  //   //   <MemoryRouter history={{ }} initialIndex={0}>

  //   //   </MemoryRouter>,
  //   // );
  //   const { getByLabelText } = render(<Search onKeyPress={spy} />);
  //   const input = getByLabelText('');
  //   expect(input.value).toBe('23');
  //   fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
  //   expect(spy.mock.calls.length).toBe(0);
  // eslint-disable-next-line max-len
  //   // expect(historyMock.push.mock.calls[0]).toEqual([('searchValue'), ({ searchValue: 'searchValue' })]);
  // });
});
