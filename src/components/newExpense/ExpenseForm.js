import "./ExpenseForm.css"
import {useState} from "react"
function ExpenseForm(props){

    const [title1,setTitle]=useState("")
    const [amount,setAmount]=useState("")
    const [date,setDate]=useState("")
    
    function titleChange(){
        const title=document.getElementById("title").value
        setTitle(title)
    }
    function amountChage(){
        const amount=document.getElementById("amount").value
        setAmount(amount)
    }

    function dateChage(){
        const date=document.getElementById("date").value
        setDate(new Date(date))
    }

    function submitHandler(e){
        e.preventDefault()
        let expenseData={
            title:title1,
            amount:amount,
            date:date
        } 
        props.newExpenseAdd(expenseData)
        props.onCancel()
        setTitle("")
        setAmount("")
        setDate("")  
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title1} onChange={titleChange} id="title" placeholder="Enter the Title"/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amount} onChange={amountChage} id="amount" placeholder="Enter the amount"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={date} onChange={dateChage} id="date"/>
            </div>  
            <div className="new-expense__actions">
            <button onClick={props.onCancel}>cancel</button>
            <button type="submit" >Add</button>
            </div>  
            
        </div>
        </form>
    )
}
export default ExpenseForm;