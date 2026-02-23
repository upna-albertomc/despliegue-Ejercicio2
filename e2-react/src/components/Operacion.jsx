import Nota from "./Nota"
import {useState} from "react";


function Operacion(props){

    const [operacion, setOperacion]=useState("")
    const [validez, setValidez]=useState("")

    const sumaHandler = () => {
        if (props.n1=="" || props.n2 == ""){
            props.modR(NaN)
            setValidez("invalido")
        }
        else{
            props.modR(Number(props.n1)+Number(props.n2))
            setValidez("")
        }
        setOperacion("suma")
        
    }
    const restaHandler = () => {
        if (props.n1=="" || props.n2 == ""){
            props.modR(NaN)
            setValidez("invalido")
        }
        else{
            props.modR(Number(props.n1)-Number(props.n2))
            setValidez("")
        }
        setOperacion("resta")
    }
    const multiplicacionHandler = () => {
        if (props.n1=="" || props.n2 == ""){
            props.modR(NaN)
            setValidez("invalido")
        }
        else{
            props.modR(Number(props.n1)*Number(props.n2))
            setValidez("")
        }
        setOperacion("multiplicacion")
    }
    const divisionHandler = () => {
        if (props.n1=="" || props.n2 == "" || props.n2=="0"){
            props.modR(NaN)
            setValidez("invalido")
        }
        else{
            props.modR(Number(props.n1)/Number(props.n2))
            setValidez("")
        }
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
                <Nota operacion={validez} />
            </div>
        </>
    )
}
export default Operacion