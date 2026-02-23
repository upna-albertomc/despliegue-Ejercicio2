function Nota(props){

    let contenido

    if(props.operacion=="suma"){
        contenido = <div>suma seleccionada</div>
    }
    else if(props.operacion=="resta"){
        contenido= <div>resta seleccionada</div>
    }
    else if(props.operacion=="multiplicacion"){
        contenido = <div>multiplicacion seleccionada</div>
    }
    else if(props.operacion=="division"){
        contenido = <div>division seleccionada</div>
    }
    else if(props.operacion=="invalido"){
        contenido = <div>Operacion invalida</div>
    }
    else{
        contenido = <div></div>
    }

    return(
        <>
            {contenido}
        </>
    )
}
export default Nota