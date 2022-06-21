import React from 'react';



function AddExpenseBtn(props){

    const {onAddExpense}=props;

    return(
        <button type='click' className='AddNewExpenseBtn' onClick={onAddExpense}>Add New Expense</button>  
    )
}
export default AddExpenseBtn