import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    // Access the 'expenses' array from the AppContext using useContext
    const { expenses,currency } = useContext(AppContext);

    // Calculate the total expenses using the reduce method
    const totalExpenses = expenses.reduce((total, item) => {
        // Accumulate the cost of each item to calculate the total
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            {/* Display the total expenses */}
            <span>Spent so far: {currency} {totalExpenses}</span>
        </div>
    );
};


export default ExpenseTotal;

 