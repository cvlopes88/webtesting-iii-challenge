import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('render controls correct', () => {

    render(<Controls />);
});


test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});


test('testing the buttons on control', () => {
const toggleLocked = jest.fn();
const locked = jest.fn();
const closed = jest.fn();
const toggleClosed = jest.fn();
const disabled = jest.fn();

const { getByTestId, getByText } = render(<Controls  
    
toggleLocked={toggleLocked}
locked={locked}
closed={closed}
toggleClosed={toggleClosed}
disabled={true}
/>);

const togglebtn = getByTestId(/togglebtn/i);
const togglebtnTwo = getByText(/Open Gate/i);

fireEvent.click(togglebtn);
fireEvent.click(togglebtnTwo);
expect(toggleLocked).toHaveBeenCalled();
expect(locked).toBeTruthy();

});


