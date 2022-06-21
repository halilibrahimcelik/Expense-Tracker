import React, {useState} from 'react';
import "./ExpenseFilter.css";

function ExpenseFilter(props){
    const {onSelectedYear,selected}=props;
    //!selected is our default value we get from our expenses 


    const filterHandler=(e)=>{

        onSelectedYear(e.target.value)
   
    }

   return(
    <div className='expenses-filter'>
        <div className="expenses-filter__control">
            <label>Filtered by year</label>
            <select value={selected}  onChange={filterHandler}>
            <option >All</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>

            </select>
        </div>


    </div>


   ) 
}

export default ExpenseFilter;