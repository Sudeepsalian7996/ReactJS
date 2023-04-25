import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"

function ExpenseItem(props){
    return (
        <div >
        <h2 className="expense">Expense Items</h2>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount} loc={props.loc}/>
        </div>
    )
}
export default ExpenseItem