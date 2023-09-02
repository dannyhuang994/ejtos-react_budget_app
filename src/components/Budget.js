import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    // Access the 'budget' property from the context using useContext
    const { budget,expenses,currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const setBudget = (new_budget) => {
        if (new_budget > 20000){
            alert("The budget is invalid: it can't exceed 20000!");
            return;
        }

        if (new_budget < totalExpenses){
            alert("The budget is lower than Spending. You have spent " + totalExpenses + "!");
            return;
        }
        dispatch({
            type: "SET_BUDGET",
            payload: new_budget});
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                required='required'
                id = "Budget"
                type = 'number'
                value = {budget}
                max = "20000"
                min= "0"
                step = "10"
                onChange={(event) => setBudget(event.target.value)}
                /> 
            </span>
        </div>
    );
};
export default Budget;