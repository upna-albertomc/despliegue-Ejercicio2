import InputNumero from "./InputNumero";
import {useState} from "react";
import Operacion from "./Operacion";


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
            <h1>Calculadora</h1>
            <InputNumero mod={modN1} label="Primer numero: "/>
            <InputNumero mod={modN2} label="Segundo numero: "/>

            <Operacion n1={n1} n2={n2} modR={modR}/>


            <div>{r}</div>

        </>
    )

}

export default Pagina;