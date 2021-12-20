import React,{useState, useEffect, createContext} from "react"
import {app} from "../base"
export const AuthContext = createContext()

export const AuthProvier = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{
        app.auth().onAuthStateChanged().then(data=>{
            setCurrentUser(data)
        })
    },[])
    return(
        <AuthContext.Provider>   ZX
            {children}
        </AuthContext.Provider>
    )
}