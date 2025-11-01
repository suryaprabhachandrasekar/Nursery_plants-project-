import React, { createContext, useState } from 'react'
export const userCont = createContext()
export const Conapi = ({ children }) => {
    const [staff, setStaff] = useState([])
    const [student, setStudent] = useState([])
    return (
        <>
            <userCont.Provider value={{ staff, setStaff, student, setStudent }}>
                {children}
            </userCont.Provider>
        </>
    )
}
