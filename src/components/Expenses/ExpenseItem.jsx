import React, {useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const { title, price, date } = props;
  
  const [firstTitle, setTitle]=useState(title);
  // console.log("expenseItem evaluated");




  return (
    <Card className="expense-item">
      <ExpenseDate  dateSchedule={date}>

      </ExpenseDate>
      <div  className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₺{price} </div>
      </div>

    </Card>
  );
}

export default ExpenseItem;
