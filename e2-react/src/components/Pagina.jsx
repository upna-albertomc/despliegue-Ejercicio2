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
            <InputNumero mod={modN1} label="Primer numero: "/>
            <InputNumero mod={modN2} label="Segundo numero: "/>

            <div>{n1}</div>
            <div>{n2}</div>

        </>
    )

}

export default Pagina;