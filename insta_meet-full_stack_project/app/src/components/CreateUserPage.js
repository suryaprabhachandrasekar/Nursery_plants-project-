import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CreateUserPage = () => {
    const [staff, setStaff] = useState([])
    const [student, setStudent] = useState([])

    useEffect(() => {
        const getval = localStorage.getItem('staff')
        const showval = getval ? JSON.parse(getval) : []
        if (showval.length > 0) {
            setStaff(showval)
        }

    }, [])
    console.log(staff);
    useEffect(() => {
        const getval = localStorage.getItem("student")
        const showval = getval ? JSON.parse(getval) : []
        console.log(showval);

        if (showval.length > 0) {
            setStudent(showval)
        }
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
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="text-center card p-4 shadow">
                    <h2 className="mb-4 text-primary">User Management</h2>
                    <div className="d-grid gap-3 col-6 mx-auto">
                        <button className="btn btn-success btn-lg" >
                            <Link to={'/staffform'} style={{ textDecoration: 'none', color: 'white' }}>  Create Staff </Link>
                        </button>
                        <button className="btn btn-info btn-lg" >
                            <Link to={'/studentform'} style={{ textDecoration: 'none', color: 'white' }}> Create Student </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='container border rounded mt-5'>
                <h3 className='text-primary mt-1'>Staff Details :</h3>
                <div className='row'>
                    {staff.map((v, ind) => (
                        <div className='col-lg-4 d-flex justify-content-around'>
                            <div className="card mb-5 mt-3 shadow-sm  p-2" style={{ width: "23rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Mail: {v.email}</h5>
                                    <h5 className="card-subtitle mb-2">Role :  {v.role}</h5>
                                    <button className='btn btn-info' onClick={()=>{delfun(ind)}}>Delete</button>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a> */}
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
            <div className='container border rounded mt-5'>
                <div className='row'>
                    <h3 className=' mt-1 text-primary'>Student Details :</h3>
                    {student.map((v, ind) => (
                        <div className='col-lg-6 mt-5 mb-5 d-flex justify-content-around'>
                            <div className=''>
                                <div className="card shadow-sm  p-2  bg-light rounded" style={{ width: "29rem" }}>
                                    <img src={v.img} className="card-img-top" alt="..." style={{ width: '28rem', height: '22rem' }} />
                                    {/* <div className="card-body">
                                    {/* <h5 className="card-title">Card title</h5> */}
                                    {/* </div> */}
                                    <ul className="list-group list-group-flush mt-2">
                                        <h6 className="list-group-item">Name: {v.name}</h6>
                                        <h6 className="list-group-item">Email: {v.email}</h6>
                                        <h6 className="list-group-item">Class: {v.studentClass}</h6>
                                        <h6 className="list-group-item">Role: {v.role}</h6>
                                        <h6 className="list-group-item">Contact: {v.contact}</h6>
                                        <button className='btn btn-info' onClick={() => { studdel(ind) }}>Delete</button>
                                    </ul>

                                    {/* <div className="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div> */}
                                </div>
                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    );
};

export default CreateUserPage;
