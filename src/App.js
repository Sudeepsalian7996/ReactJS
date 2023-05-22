import React ,{useState} from "react";
import UserInput from "./components/UserInput";
import ElectronicsItems from "./components/ElectronicsItems";
import FoodItems from "./components/FoodItems";
import TransportItems from "./components/TransportItems";

function App() {
  const [foodArray,setFoodArray]=useState([])
  const [electronicsArray,setElectronicsArray]=useState([])
  const [transportArray,setTransportArray]=useState([])

  function showOnScreenHandler(obj){
    
    if(obj.category==='food'){
      setFoodArray((preveFoodArray)=>{
        return [...preveFoodArray,{key:obj.key,id:obj.id,price:obj.price,name:obj.productName,category:obj.category}]
      })
    }else if(obj.category==='electronics'){
      setElectronicsArray((prevElectronicsArray)=>{
        return [...prevElectronicsArray,{key:obj.key,id:obj.id,price:obj.price,name:obj.productName,category:obj.category}]
      })
    }else if(obj.category==='transport'){
      setTransportArray((prevTransportArray)=>{
        return [...prevTransportArray,{key:obj.key,id:obj.id,price:obj.price,name:obj.productName,category:obj.category}]
      })
    }
  }

  return (
    <React.Fragment>
   
      <UserInput onChange={showOnScreenHandler}/>
      <ElectronicsItems allElectroProdcuts={electronicsArray}/>
      <FoodItems allFoodProducts={foodArray}/>
      <TransportItems allTransportProducts={transportArray}/>
    </React.Fragment>
  );
}

export default App;
