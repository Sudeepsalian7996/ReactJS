import Button from "./Button"
import "./ErrorModel.css"

function ErrorModel(props){
    return(
        <div className="backdrop" onClick={props.onConfirm}>
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
        </div>
    )
}
export default ErrorModel;