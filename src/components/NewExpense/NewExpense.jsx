import React, {useState} from 'react'
import AddExpenseBtn from './AddNewExpenseBtn';
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
setVisibility(false);
onExpenseData(expenseData)
}    

//!setting clickable logic
const [isSeen,setVisibility]=useState(false);

const AddNewExpenseBtnHandler=()=>{
   setVisibility(true)
    console.log("clicked")
}
const cancelHandler=()=>{
    setVisibility(false);
}

    return <div className='new-expense'>
 {(!isSeen)?<AddExpenseBtn onAddExpense={AddNewExpenseBtnHandler} />:<ExpenseForm onCancel={cancelHandler} onSaveExpenseData={expenseDataHandler}/>}

    </div>
}

export default NewExpense;