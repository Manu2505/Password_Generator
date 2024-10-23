
function PasswordDisplay(props){
    
    const text = props.pw? props.pw : "Here could be your Password. Generate it now!"

    return(
        <p id="passwordLabel">{text}</p>
    )
}

export default PasswordDisplay