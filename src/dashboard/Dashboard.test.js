import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';


test('render dashboard correct', () => {
    render(<Dashboard />);
})


test("testing Dashboard snapshot", () => {
 expect(render(<Dashboard />)).toMatchSnapshot();
})