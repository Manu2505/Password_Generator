import {Children, createContext, useState} from "react"

export const Settingcontext = createContext()

export const Settingsprovider = ({children}) => {
    const [setting, setset] = useState({})

    function getsetting (){
        return setting
    }

    function setsetting(newsetting){
        setset(newsetting)
    }

    return(
        <Settingsprovider.Provider value = {{getsetting, setsetting}}>
            {children}
        </Settingsprovider.Provider>
    )

}
