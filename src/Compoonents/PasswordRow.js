import { useState } from "react";
import StyledButton from "./StyledButton";

function PasswordRow(props){

    const {index, item, click} = props
    const [hover, setHover] = useState(false)

    return(

        <div key={index} className="pw_row" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div className="pw_row_name text">{item.name}</div>
          <div className="pw_row_pw text">{item.password}</div>
          <div className="pw_pw_delete text">{hover?<StyledButton text="Delete" click={() => click(index)}/>:null}</div>
        </div>
    )
}

export default PasswordRow