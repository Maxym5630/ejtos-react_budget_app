import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    function changeBudget (e) {
        if (e>20000) {
            alert('The budget cannot exceed funds £20000');
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input defaultValue={budget}
                    type='number'
                    step='10'
                    onChange={(event) => changeBudget(event.target.value)}
                    >
                    </input>
                </span>
        </div>
    );
};
export default Budget;