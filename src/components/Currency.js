import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    // 1. Import the AppContext and access the dispatch function.
    const { dispatch } = useContext(AppContext);

    // 2. Function to handle currency change.
    const changeCurrency = (val) => {
        // Dispatch an action to update the currency with the selected value.
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    }
    const style = {
        background:"lightgreen"
    }

    return (
        <div className='alert alert-secondary' style={style}>
            {/* Display the current currency and provide a dropdown to change it. */}
            Currency{
                <select name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)} style={style}>
                    <option value="£">£ Pound</option>
                    <option value="₹">₹ Ruppee</option>
                    <option value="€">€ Euro</option>
                    <option value="$">$ Dollar</option>
                    
                </select>
            }
        </div>
    );
};

export default Currency;
