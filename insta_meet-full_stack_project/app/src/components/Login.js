import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const nav = useNavigate()
    const [staff, setStaff] = useState([])
    const [student, setStudent] = useState([])
    useEffect(() => {
        const getval = localStorage.getItem('staff')
        const showval = JSON.parse(getval)
        setStaff(showval)
    }, [])
    // console.log(staff);
    useEffect(() => {
        const getval = localStorage.getItem("student")
        const showval = JSON.parse(getval)
        setStudent(showval)
    }, [])
    // console.log(student);
    const [data, setData] = useState({
        email: '',
        password: '',
        role: ''
    })
    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    console.log(data);
    function handleSubmit() {
        if (data.role === 'Admin') {
            if (data.email === 'admin@gmail.com') {
                if (data.password === 'admin@123') {
                    window.alert("logged in successfully")
                    nav('/admin')

                } else {
                    window.alert("please check your password")
                }
            }
            else {
                window.alert("please check your email")
            }
        }
        if(data.role === "Staff"){
            const abc=staff.filter((x)=>x.user === data.email)
            console.log(abc);
            console.log(abc[0].pass);
            
            if(abc){
                if(data.password === abc[0].pass){
                    window.alert("logged in ")
                }else{
                    window.alert("please check password")
                }
            }else{
                window.alert("please check your email")
            }

        }
         if(data.role === "Student"){
            const abc=student.filter((x)=>x.email === data.email)
            console.log(abc);
            console.log(abc[0].pass);
            
            if(abc){
                if(data.password === abc[0].pass){
                    window.alert("logged in ")
                }else{
                    window.alert("please check password")
                }
            }else{
                window.alert("please check your email")
            }

        }
    }
    return (
        <>
            <div className='container-md d-flex justify-content-center mt-5'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='border rounded border-dark  p-5 text-bg-secondary' style={{ marginTop: '11%' }}>
                            <div style={{ marginLeft: '33%', marginTop: '10%' }}><h4>Hello Again !</h4></div>
                            <form className='p-4'>
                                <table style={{ color: 'white' }}>
                                    <tbody>
                                        <tr>
                                            <td>Email  </td>
                                            <td className='ps-3'><input type='text' name='email' onChange={(e) => handleChange(e)}></input></td>
                                        </tr>
                                        <tr >
                                            <td>Password  </td>
                                            <td className='ps-3'><input type='password' onChange={(e) => handleChange(e)} name='password'></input></td>
                                        </tr>
                                        <tr >
                                            <td> Role  </td>
                                            <td className='ps-3'>
                                                <select name='role' onChange={(e) => handleChange(e)}>
                                                    <option>Choose Your Role Here!</option>
                                                    <option>Admin</option>
                                                    <option>Staff</option>
                                                    <option>Student</option>
                                                </select></td>
                                        </tr>
                                        {/* <tr>
                                        <td></td>
                                        <td style={{ paddingLeft: '50%' }}>sign up?</td>
                                    </tr> */}
                                        <tr>
                                            <td></td>
                                            <td type="button" className="btn btn-primary  mt-4 ms-3" onClick={handleSubmit}>Login</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
