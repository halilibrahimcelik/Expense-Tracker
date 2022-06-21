import React from 'react'
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

onExpenseData(expenseData)
}    


let isClicked=false;
const AddNewExpenseHandler=()=>{
    isClicked=true;
    console.log("clicked")
}
    return <div className='new-expense'>
 {(!isClicked)?<AddExpenseBtn onAddExpense={AddNewExpenseHandler} />:<ExpenseForm onSaveExpenseData={expenseDataHandler}/>}
  {console.log(isClicked)}
    </div>
}

export default NewExpense;