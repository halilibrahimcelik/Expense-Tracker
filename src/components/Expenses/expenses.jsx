
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
function Expenses(props){
const {title,date,price}=props;

    return(
        <Card className="expenses">
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
    )
}

export default Expenses;
