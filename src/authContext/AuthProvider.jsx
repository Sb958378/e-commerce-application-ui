import React, { createContext, useContext, useState } from "react";

export const authContext = createContext({});
const AuthProvider = ({children})=>{
    const[user , setUser] = useState({
        userId:"",
        username:"abc",
        role:"SELLER",
        authenticated:false,
        accessExpiration:0,
        refreshExpiration:0
        })
        return(
            <authContext.Provider value = {{user, setUser}}>{children}</authContext.Provider>
        )
}

export default AuthProvider

export const useAuth =()=> useContext(authContext);
