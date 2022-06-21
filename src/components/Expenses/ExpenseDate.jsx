import "./ExpenseDate.css"
function ExpenseDate(props){
    const {dateSchedule}=props

    const month=new Date(dateSchedule).toLocaleString('en-GB', { month: 'long' })
    const day=new Date(dateSchedule).toLocaleString('en-GB', { day: '2-digit' })
    const year=new Date(dateSchedule).getFullYear();
  
    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-day__day">{day}</div>
        <div className="expense-date__year">{year}</div>
        
        </div>

    )
}
export default ExpenseDate;