import Nota from "./Nota"
import {useState} from "react";


function Operacion(props){

    const [operacion, setOperacion]=useState("")

    const sumaHandler = () => {
        props.modR(props.n1+props.n2)
        setOperacion("suma")
    }
    const restaHandler = () => {
        props.modR(props.n1-props.n2)
        setOperacion("resta")
    }
    const multiplicacionHandler = () => {
        props.modR(props.n1*props.n2)
        setOperacion("multiplicacion")
    }
    const divisionHandler = () => {
        props.modR(props.n1/props.n2)
        setOperacion("division")
    }

    return(
        <>
            <div>
                <button onClick={sumaHandler}>+</button>
                <button onClick={restaHandler}>-</button>
                <button onClick={multiplicacionHandler}>*</button>
                <button onClick={divisionHandler}>/</button>
            </div>
            <div>
                <Nota operacion={operacion} />
            </div>
        </>
    )
}
export default Operacion