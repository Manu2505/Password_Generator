import { useContext, useEffect, useState } from "react"
import { Settingcontext } from "../context/settingscontext"

function Settings() {

    const {setsetting, getsetting} = useContext(Settingcontext)
    const [length, setLength] = useState(-1)
    const [caps, setCaps] = useState(false)
    const [lower, setLower] = useState(false)
    const [numbers, setNumber] = useState(false)
    const [spezial, setSpezial] = useState(false)

    useEffect(()=>{
        setLength(getsetting("lengPassword"))
        setCaps(getsetting("capLetters"))
        setLower(getsetting("smallLetters"))
        setNumber(getsetting("numbers"))
        setSpezial(getsetting("specialChars"))
    },[])

    function handleLengthChange(e){
        setLength(e.target.value)
        setsetting("lengPassword", e.target.value)
    }

    function handleCapsChange(){
        setCaps(!caps)
        setsetting("capLetters", !caps)
    }
    function handleLowerChange(){
        setLower(!lower)
        setsetting("smallLetters", !lower)
    }
    function handleNumberChange(){
        setNumber(!numbers)
        setsetting("numbers", !numbers)
    }
    function handleSpezialChange(){
        setSpezial(!spezial)
        setsetting("specialChars", !spezial)
    }


    return (
        <table>
            <tr>
                <td><label for="lengPassword">How longs should your Password be?</label></td>
                <td><input onChange={(e) => handleLengthChange(e)} type={"range"} id="lengPassword" name="lengPassword" min="1" max="100" value={length} /></td>
                <td><p id="showRange">{length}</p></td>
            </tr>
            <tr>
                <td><label for="capLetters">Capitalized Letters</label></td>
                <td><label for="smallLetters">Non-capitalized Letters</label></td>
                <td><label for="numbers">Numbers</label></td>
                <td><label for="specialChars">Special Characters</label></td>
            </tr>
            <tr>
                <td><input type="checkbox" id="capLetters" onChange={() => handleCapsChange()} name="capLetters" checked={caps} /></td>
                <td><input type="checkbox" id="smallLetters" onChange={() => handleLowerChange()} name="smallLetters" checked={lower} /></td>
                <td><input type="checkbox" id="numbers" onChange={() => handleNumberChange()} name="numbers" checked={numbers}/></td>
                <td><input type="checkbox" id="specialChars" onChange={() => handleSpezialChange()} name="specialChars" checked={spezial} /></td>
            </tr>
        </table>
    )
}
export default Settings