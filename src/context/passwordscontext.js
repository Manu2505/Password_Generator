import {Children, createContext, useState} from "react"

export const Passwordscontext = createContext()

export const Passwordsprovider = ({children}) => {
    const [passwords, setpasswords] = useState([])

    function getpassword (){
        return passwords
    }

    function addPassword(newpassword){
        let temp=passwords.push(newpassword)
        setpasswords(temp)
    }
    function importPasswords(importedPasswords){
        setpasswords(importedPasswords)
    }

    return(
        <Passwordsprovider.Provider value = {{getpassword,addPassword, importPasswords}}>
            {children}
        </Passwordsprovider.Provider>
    )

}