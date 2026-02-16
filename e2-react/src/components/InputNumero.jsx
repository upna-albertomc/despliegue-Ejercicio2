function InputNumero(props){


    const numeroHandler = (event) =>{
       props.modN1(event.target.value) 
    }

    return(
        <>
            <form>
                <label>primer numero:</label>
                <input type="text" onChange={numeroHandler}></input>
            </form>
        </>
    )

    
}

export default InputNumero