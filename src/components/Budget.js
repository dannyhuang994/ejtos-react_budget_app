import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Access the 'budget' property from the context using useContext
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default Budget;