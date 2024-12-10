import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [signedInUser, setSignedInUser] = useState(null);

    useEffect(() => {
        const savedUser = Cookies.get("signedInUser");
        if (savedUser) {
            setSignedInUser(savedUser);
        }
    }, []);

    const handleLogin = (user) => {
        setSignedInUser(user);
        Cookies.set("signedInUser", user, { expires: 1 }); 
    };

    const handleLogout = () => {
        setSignedInUser(null);
        Cookies.remove("signedInUser"); 
    };

    return (
        <UserContext.Provider value={{ signedInUser, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);