import ExpenseForm from "./ExpenseForm"
import { useState } from "react"

function NewExpense(props){
    const [form,setForm]=useState(false)
    function newExpenseAddHandler(expenseData){
        const newExpenseData={
            ...expenseData,
            id:Math.random().toPrecision(3)
        }
        props.expenseAddedToApp(newExpenseData)
    }
    
    function expenseHandler(){
        setForm(true)
    }
    function cancelHandler(){
        setForm(false)
    }
    return(
        <div>
            {!form && <button onClick={expenseHandler}>Add new Expense</button>}
            {form && <ExpenseForm newExpenseAdd={newExpenseAddHandler} onCancel={cancelHandler}/>}
        </div>
        
    )
}
export default NewExpense