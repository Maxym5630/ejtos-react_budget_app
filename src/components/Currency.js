import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { dispatch, dropdown, currency } = useContext(AppContext);
    const obj = {
        '$': 'Dollar',
        '£': 'Pound',
        '€': 'Euro',
        '₹': 'Ruppee'
    }
    console.log(dropdown)
    const changeDrop = () => {
        dispatch({
            type: 'DROPDOWN',
            payload: !dropdown
        });
    }
    const changeCurr = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e
        });
    }
return (
        <div style={{height: 58, paddingTop: 9}} className={`alert alert-secondary`}>
            <div className="dropdown show">
                <button 
                 style={{backgroundColor: '#92e399',color:'white'}}
                onClick={(event) => changeDrop()}
                className="btn dropdown-toggle" 
                id="dropdownMenuLink" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                   Currency ({currency} {obj[currency]})
                </button>

                <div
                style={{backgroundColor: '#92e399'}}
                className={`dropdown-menu ${dropdown?'show':''}`} aria-labelledby="dropdownMenuLink">
                    <button onClick={(event) => changeCurr("$")}  className="dropdown-item" data-name="$">$ Dollar</button>
                    <button onClick={(event) => changeCurr("£")}  className="dropdown-item" data-name="£">£ Pound</button>
                    <button onClick={(event) => changeCurr("€")}  className="dropdown-item" data-name="€">€ Euro</button>
                    <button onClick={(event) => changeCurr("₹")}  className="dropdown-item" data-name="₹">₹ Ruppee</button>
                </div>
            </div>
        </div>
    );
};
export default Currency;