import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const { dispatch } = useContext(AppContext);
    const changeBudget = (e) => {
        console.log(e, expenses )
        if (e>20000) {
            alert('The budget cannot exceed funds £20000');
        } else if(e<totalExpenses){
            alert('You cannot reduce the budget value lower than the spending');
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: e
            });
        }
    }
    return (
        <div style={{height: 58, paddingTop: 13}} className='alert alert-secondary'>
            <span>Budget: {currency}
                <input value={budget}
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