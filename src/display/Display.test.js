import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('render display correct', () => {
    render(<Display />);
});


test('should match snapshot', () => {
    expect(render(<Display />)).toMatchSnapshot();
});


