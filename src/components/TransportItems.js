import React from "react"

function TransportItems(props){
    localStorage.setItem(props.id,JSON.stringify(props))

    return(
        <React.Fragment>
            <h1>Transport Items</h1>
            {
                props.allTransportProducts.map((prod)=>{
                    return (
                       
                    <li key={prod.key}>{prod.id} {prod.productName} {prod.price} {prod.category} 
                    <button>delete</button></li>
                    
        
                    )
                })
            }
        </React.Fragment>
    )
}
export default TransportItems;