import "./ExpenseForm.css"
function ExpenseForm(){

    function addExpense(){
        const title=document.getElementById("title").value
        const number=document.getElementById("amount").value
        const date=document.getElementById("date").value
        console.log(title,number,date)
    }
    return (
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" id="title" placeholder="Enter the Title"/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" id="amount" placeholder="Enter the amount"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" id="date"/>
            </div>  
            <div className="new-expense__actions">
            <button type="submit" onClick={addExpense}>Add</button>
            </div>  
            
        </div>
    )
}
export default ExpenseForm;