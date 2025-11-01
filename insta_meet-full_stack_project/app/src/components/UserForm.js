import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'staff',
    });
    console.log(formData);
    const nav=useNavigate()
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        // console.log('Form Submitted:', formData);
        // alert(`Email: ${formData.email}\nRole: ${formData.role}`);
        const getval = localStorage.getItem('staff')
        const changeval = (getval) ? JSON.parse(getval) : []
        console.log(changeval);
        
        changeval.push(formData)
        localStorage.setItem('staff', JSON.stringify(changeval))
        window.alert("staff created successfully")
        nav('/admin')
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow w-100" style={{ maxWidth: '400px' }}>

                <h3 className="text-center mb-4">Create Staff</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Role</label>
                        <select
                            name="role"
                            className="form-select"
                            required
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="">Select Role</option>
                            <option ></option>
                            <option value="staff">Staff</option>
                            {/* <option value="student">Student</option> */}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
