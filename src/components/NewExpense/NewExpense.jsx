import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense=(props)=>{
    const {onExpenseData}=props;
// console.log(onExpenseData)

const expenseDataHandler=(enteredExpenseData)=>{
const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
};

// console.log(expenseData)
onExpenseData(expenseData)
}    

    return <div className='new-expense'>
 <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
    </div>
}

export default NewExpense;