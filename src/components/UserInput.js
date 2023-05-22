import React,{useState} from "react"

function UserInput(props){
    const [id,setId]=useState('')
    const [price,setPrice]=useState('')
    const [productName,setProductName]=useState('')
    const [category,setCategory]=useState('')

    function idHandler(e){
        setId(e.target.value)
    }

    function priceHandler(e){
        setPrice(e.target.value)
    }
    function nameHandler(e){
        setProductName(e.target.value)
    }
    function categoryHandler(e){
        setCategory(e.target.value)
    }
    function formSubmitHandler(e){
        e.preventDefault()
        let allDetails={
            key:Math.random(),
            id,
            price,
            productName,
            category
        }
      props.onChange(allDetails)
        return
    }


    return(
        <React.Fragment>
            <form>
                <label htmlFor='productId'>product Id</label>
                <input type="number" id="productId" onChange={idHandler}/>
                <label htmlFor='price'>Selling Price</label>
                <input type="number" id="price" onChange={priceHandler}/>
                <label htmlFor='pname'>Product name:</label>
                <input type="text" id="pname" onChange={nameHandler}/>
                <label htmlFor='category'>Choose category</label>
                <select id="category" onChange={categoryHandler}>
                    <option value='#'>choose an option</option>
                    <option value='food'>food</option>
                    <option value='electronics'>Electronics</option>
                    <option value='transport'>transport</option>
                </select>
                <button onClick={formSubmitHandler}>Add Product</button>
            </form>
        </React.Fragment>
    )
}
export default UserInput