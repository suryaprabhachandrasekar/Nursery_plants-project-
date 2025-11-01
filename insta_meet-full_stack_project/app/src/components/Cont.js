import React, { createContext, useState } from 'react'
import axios from 'axios';
export const userCont = createContext();
export const Cont = ({ children }) => {
    const [link, setLink] = useState(null)
    const createMeeting = async() => {
        try {
            const res = await axios.post('http://localhost:5000/create-meeting');
            setLink(res.data.join_url);
        } catch (err) {
            console.error('Error creating meeting:', err);
            alert('Failed to create meeting');
        }
        // console.log('meeting');
        
    }
    return (
        <userCont.Provider value={{ link, createMeeting }}>
            {children}
        </userCont.Provider>
    )
}
