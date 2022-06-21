import React,{useState} from 'react';

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import Warning from '../warning/Warning';
import ExpenseItem from "./ExpenseItem"
import ExpensesChart from './ExpensesChart';
import "./Expenses.css"
function Expenses(props){
const {items}=props;


const[filteredYear,selectedYear]=useState("2020");
//!filteredYear is our default value

let filteredArray=items.filter(expense=>   {
    if( expense.date.getFullYear().toString()==="all"){
   
        return "items"
    }else{

     return   expense.date.getFullYear().toString() ===filteredYear;
    }

})


const selectedYearHandler=(enteredYear)=>{
    selectedYear(enteredYear);
    // console.log(enteredYear)
    // console.log(filteredYear)   
}


    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onSelectedYear={selectedYearHandler} />
                <ExpensesChart expenses={filteredArray}></ExpensesChart>

              {(filteredYear !=="All" &&filteredArray.length===0  )?<Warning year={filteredYear}/>:null}

              {((filteredYear==="All")?items:filteredArray).map( expense=> <ExpenseItem
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
              
              />)}
      
            </Card>
        </div>
    )
}

export default Expenses;
