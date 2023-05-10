import React from "react"
import  ReactDOM  from "react-dom"

import Button from "./Button"
import "./ErrorModel.css"

const Backdrop=(props)=>{
    return <div className="backdrop" onClick={props.onConfirm}></div>
}
const Model=(props)=>{
    return(
        <div className="modal">
            <header className="header">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
            <p>{props.message}</p>
            </div>
            <footer className="action">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </div>
    )
}
function ErrorModel(props){
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById("one"))}
              {ReactDOM.createPortal(<Model title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
            document.getElementById("two"))}
        </React.Fragment>
    )
}
export default ErrorModel;