import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';
import Dashboard from '../dashboard/Dashboard';

test('render display correct', () => {
    render(<Display />);
});


test('should match snapshot', () => {
    expect(render(<Display />)).toMatchSnapshot();
});


test('testing the display ', () => {
   const closed = jest.fn();
   const locked = jest.fn();


   const { getByText, getElementsByClassName } = render(<Display 
   
    closed={closed}
    locked={locked}

/>);

const closedDisplay = getElementsByClassName(/display panel/i)[0];
const lockedDisplay = getByText(/locked/i);

expect(closed).toBeFalsy();


});