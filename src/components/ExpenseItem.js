import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FcPlus,FcMinus } from 'react-icons/fc';

const ExpenseItem = (props) => {
    // Access the dispatch function from AppContext using useContext
    const { dispatch,currency } = useContext(AppContext);

    // Function to handle deleting an expense
    const handleDeleteExpense = () => {
        // Dispatch a DELETE_EXPENSE action with the expense's id as payload
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    // Function to increase allocation
    const increaseAllocation = (name) => {
        // Create an expense object with a name and cost
        const expense = {
            name: name,
            cost: 10,
        };

        // Dispatch an ADD_EXPENSE action with the new expense as payload
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    // Function to decrease allocation
    const decreaseAllocation = (name) => {
        // Create an expense object with a name and cost
        const expense = {
            name: name,
            cost: -10,
        };

        // Dispatch an ADD_EXPENSE action with the new expense as payload
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency} {props.cost}</td>
            <td>
                {/* Button to increase allocation, passing the name as an argument */} 
                <FcPlus size="30"  onClick={event => increaseAllocation(props.name)}/>
            </td>
            <td>
                {/* Button to decrease allocation, passing the name as an argument */}
                <FcMinus size="30" onClick={event => decreaseAllocation(props.name)} />
            </td>
            <td>
                {/* Delete button with an event handler */}
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
