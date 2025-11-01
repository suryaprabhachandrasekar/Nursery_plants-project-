import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const StudentRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    studentClass: '',
    contact: '',
    age: '',
    role: 'student',
    // image: null,
  });
  const nav=useNavigate()
  function handleImage(e) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        console.log(base64String);
        setFormData(prev => ({ ...prev, img: base64String }))
      }
      reader.readAsDataURL(file)
    }
    console.log(FormData);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const getval = localStorage.getItem('student')
    const changeval = (getval) ? JSON.parse(getval) : []
    console.log(changeval);
    changeval.push(formData)
    localStorage.setItem('student', JSON.stringify(changeval))
    window.alert("student created successfully")
    nav('/admin')
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow w-100" style={{ maxWidth: '500px' }}>
        <h3 className="text-center mb-4 text-primary">Student Registration</h3>
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-3">
            <label>Name</label>
            <input type="text" name="name" className="form-control" required value={formData.name} onChange={handleChange} />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label>Email</label>
            <input type="email" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" className="form-control" required value={formData.password} onChange={handleChange} />
          </div>

          {/* Class */}
          <div className="mb-3">
            <label>Class</label>
            <input type="text" name="studentClass" className="form-control" required value={formData.studentClass} onChange={handleChange} />
          </div>

          {/* Contact */}
          <div className="mb-3">
            <label>Contact</label>
            <input type="tel" name="contact" className="form-control" required value={formData.contact} onChange={handleChange} />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label>Age</label>
            <input type="number" name="age" className="form-control" required value={formData.age} onChange={handleChange} />
          </div>

          {/* Role (readonly) */}
          <div className="mb-3">
            <label>Role</label>
            <input type="text" name="role" className="form-control" readOnly value={formData.role} />
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label>Upload Photo</label>
            <input type="file" name="image" className="form-control" accept="image/*" onChange={(event) => handleImage(event)} />
          </div>
          {/* Submit */}
          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegisterForm;
