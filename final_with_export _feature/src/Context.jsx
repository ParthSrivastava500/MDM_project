import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export const StudentProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    return <StudentContext.Provider value={{value, setValue}}>
        {children}
    </StudentContext.Provider>
};