import { createContext, useState } from "react"
import { importPasswords, loadPasswordsFromLocal } from "../Storage/localstroage"
import { addPasswordToLocal } from "../Storage/localstroage";

export const Passwordscontext = createContext()

export const Passwordsprovider = ({ children }) => {
    const [passwords, setpasswords] = useState(loadPasswordsFromLocal())

    function getpassword() {
        console.log(passwords)
        return passwords
    }

    function addPassword(newpassword) {
        let temp = passwords
        temp.push(newpassword)
        setpasswords(temp)
        addPasswordToLocal(newpassword.name, newpassword.password)
    }
    //function importPasswords(importedPasswords) {
    //    setpasswords(importedPasswords)
    //}

    function deletePW(index) {

        let p = passwords.filter((_, i) => i !== index);

        setpasswords(p)
        importPasswords(p)
    }

    function importFromJson(file, callback) {
        if (file && file.type === 'application/json') {
            const reader = new FileReader();
      
            reader.onload = async (e) => {
              try {
                const jsonData = JSON.parse(e.target.result);
                setpasswords(jsonData)
                importPasswords(jsonData)
                callback()
              } catch (error) {
                console.error('Error parsing JSON file:', error);
              }
            };
      
            reader.readAsText(file);
          } else {
            alert('Please upload a valid JSON file.');
          }
    }

    return (
        <Passwordscontext.Provider value={{ passwords, getpassword, deletePW, addPassword, importPasswords, importFromJson }}>
            {children}
        </Passwordscontext.Provider>
    )

}