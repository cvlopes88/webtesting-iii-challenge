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
// const toggleLocked = jest.fn();
// const locked = jest.fn();
// const closed = jest.fn();
// const toggleClosed = jest.fn();
// const disabled = jest.fn();

const { getByText } = render(<Controls  
    
// w
closed={false}
locked={false}
// locked={locked}
// closed={closed}
// toggleClosed={toggleClosed}
// disabled={true}
/>);

 getByText(/close gate/i);
 getByText(/lock Gate/i);

// fireEvent.click(togglebtn);
// fireEvent.click(togglebtnTwo);
// expect(toggleLocked).toHaveBeenCalled();
// expect(locked).toBeTruthy();

});


test('should render gate ', () => {

    const { getByText } = render(<Controls 
    
        closed={true}
        locked={true}
    
    />)

    getByText(/open gate/i)
    getByText(/unlock gate/i)

})



test('should disable open gate button if gate locked', () => {
    const mockFn = jest.fn();

    const {getByText} = render(<Controls 
        locked={true} closed={true} toggleClosed={mockFn}
        
        />)

        const lockedButton = getByText(/lock gate/i);
        fireEvent.click(lockedButton);
        expect(mockFn).not.toBeCalled();
});



test('should disable lock gate button if gate closed', () => {
    const mockFn = jest.fn();

    const {getByText} = render(<Controls 
        locked={true} closed={true} toggleClosed={mockFn}
        
        />)

        const lockedButton = getByText(/lock gate/i);
        fireEvent.click(lockedButton);
        expect(mockFn).not.toBeCalled();
})