import React, {useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const { title, price, date } = props;
  
  const [firstTitle, setValue]=useState(title)


  const clickHandler=()=>{
setValue("hola")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate  dateSchedule={date}>

      </ExpenseDate>
      <div  className="expense-item__description">
        <h2>{firstTitle}</h2>
        <div className="expense-item__price">${price} </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
