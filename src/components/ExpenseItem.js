import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"

function ExpenseItem(props){
    function deleteButton(){
        console.log("deleted successfully!!")
    }
    return (
        <div >
        <h2 className="expense">Expense Items</h2>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount} loc={props.loc}/>
        <button onClick={deleteButton}>delete</button>
        </div>
        
    )
}
export default ExpenseItem