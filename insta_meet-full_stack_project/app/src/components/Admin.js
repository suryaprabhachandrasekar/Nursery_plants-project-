import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Admin = () => {
    const [staff, setStaff] = useState([])
    const [student, setStudent] = useState([])

    useEffect(() => {
        const getval = localStorage.getItem('staff')
        const showval = JSON.parse(getval)
        setStaff(showval)
    }, [])
    console.log(staff);
    useEffect(() => {
        const getval = localStorage.getItem("student")
        const showval = JSON.parse(getval)
        setStudent(showval)
    }, [])
    console.log(student);

    function delfun(i) {
        console.log(i);
        staff.splice(i, 1)
        let newnew = staff.filter((data) => data !== staff)
        setStaff(newnew)
        console.log(staff);
        localStorage.setItem("staff", JSON.stringify(staff))
        window.location.reload()
    }

    function studdel(i) {
        console.log(i);
        student.splice(i, 1)
        let newstud = student.filter((data) => data !== student)
        console.log(newstud);
        localStorage.setItem("student", JSON.stringify(newstud))
        window.location.reload()
    }


    return (
        <>


            <div className='container'>
                <div className='container-fliud'>
                    <div className='row text-center'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-4'>
                            <div className='border rounded border-dark  p-5 text-bg-secondary mb-5'>
                                <div className='in'>
                                    <Link to={'/staffcre'} style={{ color: 'white', textDecoration: 'none' }}>  <div>Create Staff</div></Link>
                                    <Link to={'/stucre'} style={{ color: 'white', textDecoration: 'none' }}>  <div>Create Student</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'></div>

                    </div>
                </div>

            </div>

            <div className='container border rounded mb-5'>
                <h3 className='text-secondary'>Staff Details:</h3>
                <div className='row row-cols-lg-3'>

                    {staff.map((v, i) => (
                        <div className='container mt-3 mb-3'>
                            <div className='card p-3'>
                                <div className='card-title'>
                                    <h5>Email:{v.user}</h5>
                                </div>
                                <div className='card-cat'>
                                    <h6>Pass:{v.pass}</h6>
                                </div>
                                <div className='btn btn-secondary' onClick={() => delfun(i)}>
                                    Delete
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className='container border rounded'>
                <h3 className='text-secondary'>Student Details:</h3>
                <div className='row row-cols-lg-3 mt-3 mb-3'>
                    {student.map((v, i) => (
                        <div className='container'>
                            <div className='card p-3'>
                                <div className='card-title'>
                                    <div className='text-center'>
                                        <img height={"150px"} width={"150px"} src={v.img}></img>
                                    </div>
                                    <div className='mt-2' >
                                        <h5>Name :{v.sname}</h5>
                                    </div>
                                     <div className='mt-2' >
                                        <h5>Class :{v.class}</h5>
                                    </div>
                                     <div className='mt-2' >
                                        <h5>Age :{v.age}</h5>
                                    </div>
                                     <div className='mt-2' >
                                        <h5>Role :{v.role}</h5>
                                    </div>
                                     <div className='mt-2' >
                                        <h5>Contact :{v.contact}</h5>
                                    </div>
                                    <h5 className='mt-2'>Email :{v.email}</h5>
                                     <div className='mt-2'>
                                    <h5>Pass :{v.pass}</h5>
                                </div>
                                </div>
                               

                                <div className='btn btn-secondary' onClick={() => studdel(i)}>
                                    Delete
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}
