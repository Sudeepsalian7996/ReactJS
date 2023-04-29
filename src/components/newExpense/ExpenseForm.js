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
        setDate(date)
    }

    function submitHandler(e){
        e.preventDefault()
        console.log(title1,amount,date)     
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChange} id="title" placeholder="Enter the Title"/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={amountChage} id="amount" placeholder="Enter the amount"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={dateChage} id="date"/>
            </div>  
            <div className="new-expense__actions">
            <button type="submit">Add</button>
            </div>  
            
        </div>
        </form>
    )
}
export default ExpenseForm;