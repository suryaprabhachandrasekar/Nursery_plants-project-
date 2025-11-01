import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Studentcre = () => {
    const [data, setData] = useState({
        email: '',
        pass: '',
        sname: '',
        class: '',
        img: null,
        contact: '',
        age: '',
        role: 'student'
    })

    // const [imageUrl, setImageUrl] = useState('');
    const nav=useNavigate()

    function fun(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        // localStorage.removeItem("student")
        const getval = localStorage.getItem('student')
        const changeval = (getval) ? JSON.parse(getval) : []
        changeval.push(data)
        localStorage.setItem('student', JSON.stringify(changeval))
        nav("/admin")
        //  const{nam}=
    }
    function handleImage(e) {
            const file=e.target.files[0]
            if(file){
                const reader=new FileReader();
                reader.onloadend=()=>{
                    const base64String=reader.result;
                    console.log(base64String);
                    setData(prev=>({...prev,img:base64String}))
                }
                reader.readAsDataURL(file)
            }
            console.log(data);
            
         
    }
    console.log(data);

    return (
        <React.Fragment>
            <div className='container-md d-flex justify-content-center mt-5'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='border rounded border-dark  p-3 text-bg-secondary' style={{ marginTop: '11%' }}>
                            <form className='p-4'>
                                <table style={{ color: 'white' }}>
                                    <tbody>
                                        <tr>
                                            <td>Create User</td>
                                            <td className='ps-3'><input type='text' placeholder='Email-id' name='email' onChange={fun}></input></td>
                                        </tr>
                                        <tr >
                                            <td>Password  </td>
                                            <td className='ps-3'><input type='text' name='pass' onChange={fun}></input></td>
                                        </tr>
                                        <tr >
                                            <td>Name  </td>
                                            <td className='ps-3'><input type='text' name='sname' onChange={fun}></input></td>
                                        </tr>
                                        {/* <tr >
                                        <td>Email  </td>
                                        <td className='ps-3'><input type='text'></input></td>
                                    </tr> */}
                                        <tr >
                                            <td>Class  </td>
                                            <td className='ps-3'><input type='text' name='class' onChange={fun}></input></td>
                                        </tr>
                                        <tr >
                                            <td>Image  </td>
                                            <td className='ps-3'><input type='file' name='img' onChange={(event)=>handleImage(event)}></input></td>
                                        </tr>
                                        <tr >
                                            <td>Contact  </td>
                                            <td className='ps-3'><input type='text' name='contact' onChange={fun}></input></td>
                                        </tr>
                                        <tr >
                                            <td>Age  </td>
                                            <td className='ps-3'><input type='text' name='age' onChange={fun}></input></td>
                                        </tr>
                                        <tr>
                                            <td>Role</td>
                                            <td className='ps-3'><input type='text' value={'Student'} readOnly></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td type="button" className="btn btn-primary  mt-4 ms-3" onClick={handleSubmit}>Create</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={imageUrl}></img> */}
        </React.Fragment>
    )
}
