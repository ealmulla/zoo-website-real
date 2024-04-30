import {createContext, useContext, useState} from "react"

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    // Saves users id and username while logged in
    const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
    const [username, setUsername] = useState(localStorage.getItem("username") || "");

    // Logs user out by removing id and username from localStorage
    function logout() {
        setUserId("");
        setUsername("");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
    }

    return (
        // Gives all the values with the attribute value to all the components inside
        <AuthContext.Provider value={{ userId, setUserId, username, setUsername, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
