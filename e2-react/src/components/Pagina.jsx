import InputNumero from "./InputNumero";
import {useState} from "react";


function Pagina() {
    
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [r, setR] = useState(0)

    const modN1 = (num) => {
        setN1(num)
    }
    const modN2 = (num) => {
        setN2(num)
    }
    const modR = (num) => {
        setR(num)
    }


    return (
        <>
            <h1>hello world</h1>
            <InputNumero modN1={modN1}/>
            <div>{n1}</div>
        </>
    )

}

export default Pagina;