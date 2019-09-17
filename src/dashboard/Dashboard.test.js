import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';


test('render dashboard correct', () => {
    render(<Dashboard />);
})


test("testing Dashboard", () => {

   const toggleLocked = jest.fn();
   const toggleClosed = jest.fn();

   const { getByText } = render(<Dashboard 
   
    toggleClosed={toggleClosed}
    toggleLocked={toggleLocked}

   
   
   />);

   




})