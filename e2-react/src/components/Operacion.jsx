function Operacion(props){

    const sumaHandler = () => {
        props.modR(props.n1+props.n2)
    }
    const restaHandler = () => {
        props.modR(props.n1-props.n2)
    }
    const multiplicacionHandler = () => {
        props.modR(props.n1*props.n2)
    }
    const divisionHandler = () => {
        props.modR(props.n1/props.n2)
    }

    return(
        <>
            <button onClick={sumaHandler}>+</button>
            <button onClick={restaHandler}>-</button>
            <button onClick={multiplicacionHandler}>*</button>
            <button onClick={divisionHandler}>/</button>
        </>
    )
}
export default Operacion