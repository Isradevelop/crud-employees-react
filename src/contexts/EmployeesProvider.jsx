import { useState } from "react"
import { EmployeesContext } from "./EmployeesContext"

export const EmployeesProvider = ({ children }) => {

    const [employeesContext, setEmployeesContext] = useState([]);
    const [employeesContextStorage, setEmployeesContextStorage] = useState([]);

    return (
        <EmployeesContext.Provider value={{ employeesContext, setEmployeesContext, employeesContextStorage, setEmployeesContextStorage }}>
            {children}
        </EmployeesContext.Provider>
    )
}

