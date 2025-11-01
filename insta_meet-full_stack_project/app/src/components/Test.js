import React, { useState } from 'react'
export const Test = () => {
    const [data, setData] = useState({
        uname: '',
        password: '',
        role: ''
    })
    function handleSelect(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    console.log(data);
    return (
        <>
            <div>
                <div>
                    <label>Name</label>
                    <input type='text' name='uname' onChange={(e) => handleSelect(e)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' name='password' onChange={(e) => handleSelect(e)}></input>
                </div>
                <div>
                    <label>Select</label>
                    <select onChange={(e) => handleSelect(e)} name='role'>
                        <option></option>
                        <option>Admin</option>
                        <option>Staff</option>
                        <option>Student</option>
                    </select>
                </div>
            </div>
        </>
    )
}
