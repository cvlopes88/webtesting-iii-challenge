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
   
    closed={true}
    locked={false}

/>);
getByText(/closed/i)
getByText(/unlocked/i)

});


