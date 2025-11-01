import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const Login = ({ fn }) => {
    const [inp, setInp] = useState({
        email: '',
        password: '',
    })
    const nav = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        const data = await axios.post('http://localhost:8080/user', inp)
        // console.log(data.data.data)
        if (data.data.success) {
            window.alert(data.data.message)
            fn(data.data.data)
            nav('/')
        } else {
            window.alert(data.data.message)
        }
    }
    return (
        <>
            <div className='container border rounded'>
                <div className='text-center border p-3 m-3'>
                    <form>
                        <div>
                            <label>Enter Your E-Mail</label>
                            <input type='text' name='email' value={inp.email} onChange={(e) => { setInp({ ...inp, [e.target.name]: e.target.value }) }}></input>
                        </div>
                        <div>
                            <label>Enter Your Password</label>
                            <input type='password' name='password' value={inp.pasword} onChange={(e) => { setInp({ ...inp, [e.target.name]: e.target.value }) }}></input>
                        </div>
                        <p className='mt-3'>New User? <Link to={'/register'}> <span>Register</span></Link></p>
                        <button className='btn btn-info' onClick={(e) => { handleSubmit(e) }}> Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
