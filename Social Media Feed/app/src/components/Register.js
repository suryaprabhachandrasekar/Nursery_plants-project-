import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    const [inp, setInp] = useState({
        fname: '',
        email: '',
        password: '',
    })
    const nav=useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        const data = await axios.post('http://localhost:8080/info',inp)
        // console.log(data)
        if(data.data.success){
          window.alert(data.data.message)
        }
        nav('/login')
    }
    return (
        <>
            <div className='container text-center border rounded'>
                <form className='border rounded p-3 m-3'>
                    <div>
                        <label>Enter Your Name</label>
                        <input type='text' name='fname' value={inp.fname} onChange={(e) => { setInp({ ...inp, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label>Enter Your E-Mail</label>
                        <input type='text' name='email' value={inp.email} onChange={(e) => { setInp({ ...inp, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label>Enter Your Password</label>
                        <input type='password' name='password' value={inp.password} onChange={(e) => { setInp({ ...inp, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    {/* <div>
                        <label>Re-Enter Your Password</label>
                        <input type='password' name='cpassword' value={inp.cpassword} onChange={(e) => { setInp({ ...inp, [e.target.name]: e.target.value }) }}></input>
                    </div> */}
                    <button className='btn btn-info' onClick={(e) => { handleSubmit(e) }}>Submit</button>
                </form>
            </div>
        </>
    )
}
