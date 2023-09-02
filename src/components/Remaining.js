import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Remaining = () => {
    // Access 'expenses' and 'budget' from the AppContext using useContext
    const { expenses, budget, currency } = useContext(AppContext);

    // Calculate the total expenses using the reduce method
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    // Determine the alert type based on whether totalExpenses exceed the budget
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency} {budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
