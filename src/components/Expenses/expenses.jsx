import React,{useState} from 'react';

import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import Warning from '../warning/Warning';
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
function Expenses(props){
const {items}=props;


const[filteredYear,selectedYear]=useState("2020");
//!filteredYear is our default value

let newArr=items.filter(expense=>   {
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

              {(filteredYear !=="All" &&newArr.length===0  )?<Warning year={filteredYear}/>:null}

              {((filteredYear==="All")?items:newArr).map( expense=> <ExpenseItem
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
              
              />)}
                {/* /* <ExpenseItem   title={title[0]}
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
                      /> */}
            </Card>
        </div>
    )
}

export default Expenses;
