import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Staffcre = () => {
    const nav = useNavigate()
    const [data, setData] = useState({
        user: '',
        pass: '',
        role: 'staff'
    })
    function fun(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    console.log(data);

    function createfn(){
        const getval= localStorage.getItem('staff')
        const changeval =(getval)?JSON.parse(getval):[]
        changeval.push(data)
        localStorage.setItem('staff',JSON.stringify(changeval))
        nav("/admin")
    }
    return (
        <>
            <div className='container-md d-flex justify-content-center mt-5'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='border rounded border-dark  p-5 text-bg-secondary' style={{ marginTop: '11%' }}>
                            <form className='p-4'>
                                <table style={{ color: 'white' }}>
                                    <tbody>
                                        <tr>
                                            <td>Create User</td>
                                            <td className='ps-3'><input type='text' placeholder='Email id' name='user' onChange={(e) => fun(e)}></input></td>
                                        </tr>
                                        <tr >
                                            <td>Password  </td>
                                            <td className='ps-3'><input type='text' placeholder='password' name='pass' onChange={(e) => fun(e)}></input></td>
                                        </tr>
                                        <tr>
                                            <td>Role</td>
                                            <td className='ps-3'><input type='text' value={'Staff'} readOnly></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td type="button" className="btn btn-primary  mt-4 ms-3" onClick={createfn}>Create</td>
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
