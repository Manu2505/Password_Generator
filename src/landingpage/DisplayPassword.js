import { useContext, useEffect, useState } from "react"
import { Passwordscontext } from "../context/passwordscontext";
import { exportPasswords } from "../Storage/localstroage";
import StyledButton from "../Compoonents/StyledButton"
import PasswordRow from "../Compoonents/PasswordRow";

function DisplayPassword(props) {

  const { passwords, getpassword, deletePW, importFromJson } = useContext(Passwordscontext)

  const [pw, setPw] = useState(passwords)
  const [r, setR] = useState(false)
  const [file, setFile] = useState(null)

  useEffect(() => {
    setPw(getpassword())
  }, [props.r, r])

  const rows = pw.map((item, index) =><PasswordRow index={index} item={item} click={() => deleteClick()}/>)

  function deleteClick(index) {
    deletePW(index)
    setR(!r)
  }

  function fileChange(e){
    setFile(e.target.files[0])
  }
  async function handleImport() {
    if(file){
      importFromJson(file, () => setR(!r))
      setPw(getpassword())
    }
  }
  return (

    <div>
      <div>
        <StyledButton text="Import" click={() => handleImport()} />
        <input type="file" id="fileInput" name="fileInput" onChange={(e) => fileChange(e)}/>
        <StyledButton text="Export" click={() => exportPasswords()} />
      </div>
      <div id="passwordTable">
          <div className="pw_head">
            <div className="pw_row_name text_h">Password Name</div>
            <div className="pw_row_pw text_h">Password</div>
            <div className="pw_pw_delete text_h"></div>
          </div>
          {rows}
      </div>
    </div>

  )

}

export default DisplayPassword;