import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';


test('render display correct', () => {
    render(<Display />);
});


test('should match snapshot', () => {
    expect(render(<Display />)).toMatchSnapshot();
});


test('should have green-led when unlocked and open ', () => {
  


   const { getByText } = render(<Display 
   
    closed={false}
    locked={false}

/>);
const unlocked = getByText(/unlocked/i)
const open = getByText(/open/i)

expect(open.classList).toContain('green-led')
expect(unlocked.classList).toContain('green-led')
});


