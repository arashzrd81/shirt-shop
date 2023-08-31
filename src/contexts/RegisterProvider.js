import React, { useState } from "react";


export const RegisterContext = React.createContext();

const RegisterProvider = ({children}) => {

    const [isRegistered, setIsRegistered] = useState(0);
    const [userData, setUserData] = useState({});

    return (
        <RegisterContext.Provider value={{isRegistered, setIsRegistered, userData, setUserData}}>
            {children}
        </RegisterContext.Provider>
    );
};


export default RegisterProvider;