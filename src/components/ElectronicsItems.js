import React from "react"

function ElectronicsItems(props){
    localStorage.setItem(props.id,JSON.stringify(props))
    return(
        <React.Fragment>
            <h1>Electronics Items</h1>
            {
                props.allElectroProdcuts.map((prod)=>{
                    return  <li key={prod.key}>{prod.id} {prod.productName} {prod.price} {prod.category} 
                    <button>delete</button></li>
                })
            }
        </React.Fragment>
    )
}
export default ElectronicsItems;