import React, { useState, useEffect, useContext } from 'react'
import { userCont } from './Cont'
export const StudentPage = () => {
    const [student, setStudent] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const storedFiles = localStorage.getItem('uploadedFiles');
        if (storedFiles) {
            setFiles(JSON.parse(storedFiles));
        }
    }, []);

    const handleFileChange = (e) => {
        setSelectedFiles(Array.from(e.target.files));
    };
    const handleUpload = () => {
        if (selectedFiles.length > 0) {
            const readerPromises = selectedFiles.map((file) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve({
                            name: file.name,
                            type: file.type,
                            data: reader.result,
                            uploadedAt: new Date().toISOString()
                        });
                    };
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(readerPromises).then((newFiles) => {
                // Get existing files from localStorage
                const existing = JSON.parse(localStorage.getItem('suploadedFiles') || '[]');
                console.log(existing);

                // Add new files to existing list
                const updatedFiles = [...existing, ...newFiles];
                localStorage.setItem('suploadedFiles', JSON.stringify(updatedFiles));
                alert("file uploaded successfully")
                // navigate('/download');
            });
        }
    };
    useEffect(() => {
        const getval = localStorage.getItem("student")
        const showval = getval ? JSON.parse(getval) : []
        console.log(showval);
        if (showval.length > 0) {
            setStudent(showval)
        }
    }, [])
    console.log(student);
    const { link } = useContext(userCont)

    return (
        <React.Fragment>
            <div className='container mt-5 border rounded'>
                <div className='mb-3 mt-3'>
                    <h5 className='text-primary'>Upload Files: </h5>
                    <input type="file" multiple onChange={handleFileChange} />
                    <button className='btn btn-info' onClick={handleUpload}>Upload</button>
                </div>

            </div>
            <div className='container mt-5 border rounded'>
                <div className='row'>
                    <div className='col-lg-12 m-3 ms-0 d-flex justify-content-start'>
                        <h5 className='text-dark'>Your Meeting Link:  <span style={{ textDecoration: 'underline black', color: 'blue' }}>{link}</span></h5>
                    </div>

                </div>
            </div>
            <div className='container mt-5 border rounded'>
                <div>
                    <h5 className='mt-2'>Staff Uploaded Files:</h5>
                    {files.length > 0 ? (
                        <ul>
                            {files.map((file, index) => (
                                <li key={index}>
                                    <a href={file.data} download={file.name}>
                                        {file.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No files uploaded yet.</p>
                    )}
                </div>
            </div>
            <div className='container mt-5 border rounded'>
                <div className='row'>
                    <h5 className='text-primary mt-2'>Student Details:</h5>
                    {student.map((v, ind) => (
                        <div className='col-lg-6 mb-3 mt-5 d-flex justify-content-around'>
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
                                        {/* <button className='btn btn-primary' onClick={createMeeting}>Schedule</button> */}
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

        </React.Fragment>
    )
}
