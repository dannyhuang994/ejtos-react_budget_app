import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    // Access the 'dispatch' and 'remaining' values from AppContext using useContext
    const { dispatch, remaining } = useContext(AppContext);

    // Define state variables for form inputs
    const [name, setName] = useState(''); // Department name
    const [cost, setCost] = useState(''); // Allocation cost
    const [action, setAction] = useState(''); // Allocation action (Add or Reduce)

    // Function to handle form submission
    const submitEvent = () => {
        // Check if the cost exceeds the remaining funds
        if (cost > remaining) {
            alert("The value cannot exceed remaining funds £" + remaining);
            setCost(''); // Clear the cost input
            return;
        }

        // Create an 'expense' object with the selected department name and cost
        const expense = {
            name: name,
            cost: parseInt(cost), // Convert 'cost' to an integer
        };

        // Dispatch an action based on the selected action (Add or Reduce)
        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE', // A specific action type for reducing allocation
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE', // A specific action type for adding allocation
                payload: expense,
            });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    {/* Department selection dropdown */}
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing">Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        {/* Additional department options */}
                    </select>

                    {/* Allocation action selection dropdown */}
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    {/* Cost input field */}
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem', size: 10 }}
                        onChange={(event) => setCost(event.target.value)}
                    />

                    {/* Save button */}
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
