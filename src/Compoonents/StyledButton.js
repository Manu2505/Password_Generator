


function StyledButton(props){
    const {text, click} = props
    return(
        <button className="styled_button" onClick={click}>{text}</button>
    )
}

export default StyledButton