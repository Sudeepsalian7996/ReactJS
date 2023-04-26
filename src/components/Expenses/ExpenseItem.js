import "./ExpenseItem.css"
import {useState} from "react"
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"

function ExpenseItem(props){
    const [title,setTitle]=useState(props.title)
    const [amount,setAmount]=useState(props.amount)
    function changeTitle(){
        setTitle("updated")
    }
    function changeAmount(){
        setAmount("$100")
    }
    return (
        <div >
        <h2 className="expense">Expense Items</h2>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={title} amount={amount} loc={props.loc}/>
        <button onClick={changeTitle}>title</button>
        <button onClick={changeAmount}>amount</button>
        </div>
        
    )
}
export default ExpenseItem