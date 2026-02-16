function Nota(props){

    let contenido = <div>ninguna operacion seleccionada</div>

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
    else{
        let contenido = <div>ninguna operacion seleccionada</div>
     
    }

    return(
        <>
            {contenido}
        </>
    )
}
export default Nota