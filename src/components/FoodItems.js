import React from "react"

function FoodItems(props){
    localStorage.setItem(props.id,JSON.stringify(props))
    return(
        <React.Fragment>
            <h1>Food Items</h1>
            {
                props.allFoodProducts.map((prod)=>{
                    return  <li key={prod.key}>{prod.id} {prod.productName} {prod.price} {prod.category} 
                    <button>delete</button></li>
                })
            }
        </React.Fragment>
    )
}
export default FoodItems;