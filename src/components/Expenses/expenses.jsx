import React,{useState} from 'react';

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
function Expenses(props){
const {title,date,price}=props;

const[filteredYear,selectedYear]=useState("2020");
//!filteredYear is our default value

const selectedYearHandler=(enteredYear)=>{
    selectedYear(enteredYear);
    console.log(enteredYear)
    console.log(filteredYear)
    
}

    return(
        <div>
            <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onSelectedYear={selectedYearHandler} />
                <ExpenseItem   title={title[0]}
            price={price[0]}
            date={date[0]}
                  />
                      <ExpenseItem
                title={title[1]}
                price={price[1]}
                date={date[1]}
              />
                      <ExpenseItem
                title={title[2]}
                price={price[2]}
                date={date[2]}
                     />
                      <ExpenseItem
                title={title[3]}
                price={price[3]}
                date={date[3]}
                      />
            </Card>
        </div>
    )
}

export default Expenses;
