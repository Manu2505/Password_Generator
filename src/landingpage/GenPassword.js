import { useContext, useState } from "react"
import { Settingcontext } from "../context/settingscontext";
import { Passwordscontext } from "../context/passwordscontext";
import PasswordDisplay from "../Compoonents/PasswordDisplay";
import StyledButton from "../Compoonents/StyledButton";

const small_char = "abcdefghijklmnopqrstuvwxyz";
const large_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special_chars = "!@#$%^&*()_+{}|:<>?";
function GenPassword(props){

    const {getsetting} = useContext(Settingcontext)
    const {addPassword} = useContext(Passwordscontext)

    const [password, setPassword] = useState("")
    const [name, setName] = useState("")


    let validSettings = false;
    function generatePassword() {
        
      let includeUppercase = getsetting("capLetters");
      let includeLowercase = getsetting("smallLetters");
      let includeNumbers = getsetting("numbers");
      let includeSpecialChars = getsetting("specialChars");
      let length = getsetting("lengPassword");

      validSettings = includeLowercase == false && includeUppercase == false && includeNumbers == false && includeSpecialChars == false

      let allChars = "";
      if (includeUppercase) allChars += large_char;
      if (includeLowercase) allChars += small_char;
      if (includeNumbers) allChars += numbers;
      if (includeSpecialChars) allChars += special_chars;

      let p = ""
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        p += allChars[randomIndex];
      }
      setPassword(p)
    }

    function savePassword(){
        addPassword({name: name, password: password})
        props.reload()
    }
    
    function handleNameChange(e){
        setName(e.target.value)
    }

    return(
        <div>
            <input type="text" className="nameOfPassword" onChange={handleNameChange} value={name}/>
            <label for="nameOfPassword">The name of your password</label>
            { validSettings ? <p id="passwordLabel">Please select at least one option</p>: <PasswordDisplay pw={password} />}
            <StyledButton text="Generate" click={() => generatePassword()} />
            <StyledButton text="Save" click={() => savePassword()} />
        </div>
    )
}

export default GenPassword