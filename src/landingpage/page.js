
import { useState } from "react"
import DisplayPassword from "./DisplayPassword"
import GenPassword from "./GenPassword"
import Settings from "./Settings"


function Page(){

    const [r, setR] = useState(false)

    return(
        <div>
            <GenPassword reload={()=> setR(!r)}/>
            <Settings />
            <DisplayPassword trigger={r}/>
        </div>
    )
}
export default Page