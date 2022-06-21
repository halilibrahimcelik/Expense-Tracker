import React, {useState} from 'react'
import AddExpenseBtn from './AddNewExpense';
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
setValue(false);
onExpenseData(expenseData)
}    

//!
const [initialValue,setValue]=useState(false);

const AddNewExpenseBtnHandler=()=>{
   setValue(true)
    console.log("clicked")
}
const cancelHandler=()=>{
    setValue(false);
}

    return <div className='new-expense'>
 {(!initialValue)?<AddExpenseBtn onAddExpense={AddNewExpenseBtnHandler} />:<ExpenseForm onCancel={cancelHandler} onSaveExpenseData={expenseDataHandler}/>}

    </div>
}

export default NewExpense;