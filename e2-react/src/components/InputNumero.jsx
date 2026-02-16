function InputNumero(props){


    function validacion(num){
        /*
        const regexp = "/^([0-9])+$/";
        return regexp.test(num)
        */
       return true
    }

    const numeroHandler = (event) =>{
        if (validacion(event.target.value.toString())){
            props.mod(event.target.value)
        }
        else{
            props.mod(-1)
        }
    }

    return(
        <>
            <form>
                <label>{props.label}</label>
                <input type="text" onChange={numeroHandler}></input>
            </form>
        </>
    )

    
}

export default InputNumero