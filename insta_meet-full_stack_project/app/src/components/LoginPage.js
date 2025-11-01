import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [staff, setStaff] = useState([])
    const [student, setStudent] = useState([])
    const [data, setData] = useState({
        email: '',
        password: '',
        role: '',
    });
    const nav = useNavigate()

    useEffect(() => {
        const getval = localStorage.getItem('staff')
        const showval = getval ? JSON.parse(getval) : []
        if (showval.length > 0) {
            setStaff(showval)
        }

    }, [])
    useEffect(() => {
        const getval = localStorage.getItem("student")
        const showval = getval ? JSON.parse(getval) : []
        console.log(showval);

        if (showval.length > 0) {
            setStudent(showval)
        }
    }, [])
    console.log(student);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };
    console.log(data);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.role === 'admin') {
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
        if (data.role === "staff") {
            console.log("staff");

            const abc = staff.filter((x) => x.email === data.email)
            console.log(abc);
            console.log(abc[0].password);

            if (abc.length > 0) {
                if (data.password === abc[0].password) {
                    window.alert("logged in successfully ")
                    nav('/staffpage')
                } else {
                    window.alert("please check password")
                }
            } else {
                window.alert("please check your email")
            }

        }
        if (data.role === "student") {
            const abc = student.filter((x) => x.email === data.email)
            console.log(abc);
            console.log(abc[0].pass);

            if (abc.length > 0) {
                if (data.password === abc[0].password) {
                    window.alert("logged in successfully ")
                    nav('/studentpage')
                } else {
                    window.alert("please check your password")
                }
            } else {
                window.alert("please check your email")
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow" style={{ width: '400px' }}>
                <h3 className="text-center text-primary mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Role</label>
                        <select
                            name="role"
                            className="form-select"
                            value={data.role}
                            onChange={handleChange}
                        >
                            <option></option>
                            <option value="admin">Admin</option>
                            <option value="staff">Staff</option>
                            <option value="student">Student</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
