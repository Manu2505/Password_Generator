import { createContext, useState} from "react"

export const Settingcontext = createContext()

export const Settingsprovider = ({children}) => {
    const [setting, setset] = useState({
        lengPassword: 20,
        capLetters: false,
        smallLetters: true,
        numbers: false,
        specialChars: false
    })

    function getsetting (option1){
        return setting[option1]?setting[option1]:false
    }

    function setsetting(option1, value){
        let nSetting = setting
        nSetting[option1] = value
        setset(nSetting)
    }

    return(
        <Settingcontext.Provider value = {{getsetting, setsetting}}>
            {children}
        </Settingcontext.Provider>
    )

}
