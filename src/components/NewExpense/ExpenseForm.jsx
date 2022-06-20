import React, {useState} from 'react';
import "./ExpenseForm.css"
const ExpenseForm=(props)=>{
    const  {onSaveExpenseData}=props;

const [enteredTitle,setEnteredTitle]=useState("")
const [enteredPrice,setEnteredPrice]=useState("")
const [enteredDate,setEnteredDate]=useState("")

// const [userInput,setserInput]=useState({
//     enteredTitle:"",
//     enteredPrice:"",
//     enteredDate:""
// })
const titleChangeHandler=(e)=>{
setEnteredTitle(e.target.value)
// console.log(enteredTitle)

// setserInput((prevState)=>{
//     return{...prevState, enteredTitle:e.target.value}
// })
}
const priceChangeHandler=(e)=>{
setEnteredPrice(e.target.value)
// console.log(enteredPrice)
}
const dateChangeHandler=(e)=>{
setEnteredDate(e.target.value)
// console.log(enteredDate)

}

const submitHandler=(e)=>{
    e.preventDefault();

const ExpenseData={
    title:enteredTitle,
    price:enteredPrice,
    date: new Date(enteredDate)
};

onSaveExpenseData(ExpenseData);

setEnteredTitle("")
setEnteredPrice("")
setEnteredDate("");
//  
// console.log(ExpenseData)

};



    return (
    <form  onSubmit={submitHandler}>

    <div className='new-expense__controls'>
    <div className='new-expense__control'>
    <label >Title</label>
    <input type="text"  value={enteredTitle} onChange={titleChangeHandler}/>

    </div>
    <div className='new-expense__control'>
    <label >Price</label>
    <input type="number" value={enteredPrice} min="0.01" step="0.01" onChange={priceChangeHandler} />

    </div>
    <div className='new-expense__control'>
    <label >Date</label>
    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />

    </div>

    </div>
    <div className='new-expense__actions'>
        <button type='submit'>Add Submit</button>
    </div>

    </form>)
};

export default ExpenseForm;